import { Observable, BehaviorSubject, iif, of, Subject } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { tap, map, filter } from 'rxjs/operators';
import { IsGuid } from './IsGuid';
import { IStoreNotifier, IStoreSettings } from './IStore';
import { action } from './store.enum';
import { IOdataCollection } from './IOdataCollection';





/**
 * Creates and Odata service store that follows the observable store pattern.
 * Provides default odata rest methods  
 */
export abstract class ODataStore<T>  {
    private _initState: IOdataCollection<T> = { "@odata.count": undefined, value: <T[]>[{}] }
    abstract baseUrl: string;
    protected _state$: BehaviorSubject<IOdataCollection<T>> = new BehaviorSubject(undefined);
    public state$: Observable<IOdataCollection<T>> = this._state$.asObservable().pipe(filter(f => typeof f === "object"));/* only get objects not the default state */
    protected _notifier$: Subject<IStoreNotifier<T>> = new Subject();
    public notifier$: Observable<IStoreNotifier<T>> = this._notifier$.asObservable();
    protected _response$: Subject<HttpResponse<IOdataCollection<T>>> = new Subject();
    public response$: Observable<HttpResponse<IOdataCollection<T>>> = this._response$.asObservable();
    private _settings: IStoreSettings = {
        //default store settings
        notifyOnDelete: true,
        notifyOnGet: false,
        notifyOnInsert: true,
        notifyOnUpdate: true
    };
    constructor(protected http: HttpClient, protected settings: IStoreSettings = null) {
        if (settings) {
            this._settings = Object.assign({}, this._settings, settings);
        }

    }

    public query = (queryString: string = null) => {
        let segments: string[] = [];
        if (queryString) {
            segments.push(...queryString.split('&'))
        }
        segments.push("$count=true");
        //prepend the ? if there are segments
        let query: string = segments.length>0?`?${segments.join('&')}`:"";

        this.http.get<IOdataCollection<T>>(`${this.baseUrl}${query}`, { observe: "response" })
            .subscribe(s => {
                this._response$.next(s);
                let currentState = Object.assign({}, this._state$.getValue(), this._initState);
                currentState["@odata.count"] = s.body["@odata.count"];
                currentState.value = s.body.value;
                this.fillStore(currentState);
                this.dispatchNotifier(action.Query)
            })
    }
    public get = <K extends keyof T>(value: T, keys: K | K[] = null, queryString: string = null): Observable<T> => {

        let segments: string[] = [];
        if (queryString) { segments.push(...queryString.split('&')) }
        let query: string = segments.length>0?`?${segments.join('&')}`:"";
        let id: string;
        if (Array.isArray(keys)) {
            id = keys.map(m => `${m}=${this.quoteKey(value[m as string])}`).join();
        }
        else {
            id = this.quoteKey(value[keys as string]);
        }

        let getObs = this.http.get<T>(`${this.baseUrl}(${id})${query}`, { observe: "response" }).pipe(tap(t => { this._response$.next(t); this.dispatchNotifier(action.Get) }), map(m => m.body));
        return getObs;

    }
    public insert = (item: T, queryString: string = null) => {
        let segments: string[] = [];
        if (queryString) { segments.push(...queryString.split('&')) }
        let query: string = segments.length>0?`?${segments.join('&')}`:"";
        this.http.post<T>(`${this.baseUrl}${query}`, item, { observe: "response" }).subscribe(s => {
            this._response$.next(s);
            this.updateStore(s.body, "insert");
        })
    }
    public update = <K extends keyof T>(item: T, keys: K | K[] = null, queryString: string = null, method: "put" | "post" = "put") => {
        let segments: string[] = [];
        if (queryString) { segments.push(...queryString.split('&')) }
        let query: string =segments.length>0?`?${segments.join('&')}`:"";
        let id: string;
        if (Array.isArray(keys)) {
            id = keys.map(m => `${m}=${this.quoteKey(item[m as string])}`).join();
        }
        else {
            id = this.quoteKey(item[keys as string]);
        }
        let url = keys != null ? `${this.baseUrl}(${id})${query}` : `${this.baseUrl}${query}`;
        let operation: Observable<HttpResponse<Object>>;
        switch (method) {
            case "post":
                operation = this.http.post(url, item, { observe: "response" });
                break;
            default:
                operation = this.http.put(url, item, { observe: "response" });

                break;
        }

        operation.subscribe(s => {
            this._response$.next(s);
            this.updateStore(item, "update", keys)
        }
        );
    }
    public patch = <K extends keyof T>(item: T, keys: K | K[] = null, queryString: string = null, method: "patch" | "put" | "post" = "patch") => {
        let segments: string[] = [];
        if (queryString) { segments.push(...queryString.split('&')) }
        let query: string = segments.length>0?`?${segments.join('&')}`:"";
        let id: string;
        if (Array.isArray(keys)) {
            id = keys.map(m => `${m}=${this.quoteKey(item[m as string])}`).join();
        }
        else {
            id = this.quoteKey(item[keys as string]);
        }
        let url = keys != null ? `${this.baseUrl}(${id})${query}` : `${this.baseUrl}${query}`;
        let operation: Observable<HttpResponse<Object>>;
        switch (method) {
            case "put":
                operation = this.http.put(url, item, { observe: "response" });
                break;
            case "post":
                operation = this.http.post(url, item, { observe: "response" });
                break;
            default:
                operation = this.http.patch(url, item, { observe: "response" });
                break;
        }
        //this.http.patch(url, item, { observe: "response" })
        operation.subscribe(s => {
            this._response$.next(s);
            this.updateStore(item, "update", keys)
        }
        );
    }
    public remove = <K extends keyof T>(item: T, keys: K | K[] = null, method: "delete" | "post" = "delete") => {

        let id: string;
        if (Array.isArray(keys)) {
            id = keys.map(m => `${m}=${this.quoteKey(item[m as string])}`).join();
        }
        else {
            id = this.quoteKey(item[keys as string]);
        }

        let url: string = keys != null ? `${this.baseUrl}(${id})` : `${this.baseUrl}`;
        let operation = method == "delete" ? this.http.delete(url, { observe: "response" }) : this.http.post<T>(url, item, { observe: "response" });
        operation.subscribe(s => {
            this._response$.next(s);
            this.updateStore(item, "delete", keys)
        }
        )
    }

    protected updateStore = <K extends keyof T>(item: T, operation: "insert" | "update" | "delete", keys: K | K[] = null): void => {

        let _store = Object.assign({}, this._initState, this._state$.getValue());
        let newState: IOdataCollection<T>;
        let values: T[];
        switch (operation) {
            case "insert":
                values = [item, ..._store.value];
                newState = { "@odata.count": _store["@odata.count"] + 1, value: values };
                this.fillStore(newState);
                this.dispatchNotifier(action.Insert, item);

                break;
            case "delete":
                let id: string;
                if (Array.isArray(keys)) {
                    //use reduce to find items to remove
                    let removed = keys.reduce((acc, curr) => {
                        acc = acc.filter(f => f[curr as string] == item[curr as string])
                        return acc;
                    }, _store.value)
                    //then filter from original array
                    values = _store.value.filter(f => removed.indexOf(f));
                }
                else {
                    values = _store.value.filter(f => f[keys as string] != item[keys]);
                }
                newState = { "@odata.count": values.length, value: values }
                this.fillStore(newState);
                this.dispatchNotifier(action.Delete, item);
                break;
            case "update":
                let res = Object.assign({}, this._initState, this._state$.getValue());
                let foundIdx: number;
                if (Array.isArray(keys)) {
                    values = keys.reduce((acc, curr) => {
                        acc = acc.filter(f => f[curr as string] == item[curr as string])
                        return acc;
                    }, _store.value);
                    foundIdx = res.value.findIndex(f => f == values[0]);
                }
                else {
                    foundIdx = res.value.findIndex(f => f[keys as string] == item[keys as string]);
                }

                let updated = Object.assign({}, res.value[foundIdx], item);
                values = [...res.value.slice(0, foundIdx), updated, ...res.value.slice(foundIdx + 1)];
                newState = { "@odata.count": res["@odata.count"], value: values };
                this.fillStore(newState);
                this.dispatchNotifier(action.Update, item);
                break;

            default:
                throw "Invalid data store operation";

        }
    }
    protected fillStore = (odata: IOdataCollection<T>): void => {
        this._state$.next(odata);

    }
    protected dispatchNotifier = (act: action, state: T = null): void => {
        let settings = this._settings;
        let note: IStoreNotifier<T> = { action: act, state: state }
        let store = this._state$.getValue();
        switch (act) {
            case action.Query:
                note.message = `Query returned ${store ? store.value ? store.value.length : 0 : 0} records.`;
                break;
            case action.Get:
                note.message = `Get action completed`;
                break;
            case action.Delete:
                note.message = `Record deleted`;
                break;
            case action.Insert:
                note.message = `New record inserted`;
                break;
            case action.Update:
                note.message = `Record updated`;
                break;
            default:
                break;
        }
        if (
            settings.notifyOnDelete && act == action.Delete
            || settings.notifyOnGet && act == action.Get
            || settings.notifyOnInsert && act == action.Insert
            || settings.notifyOnUpdate && act == action.Update
        ) {
            this._notifier$.next(note);
        }

    }

    quoteKey = (id: any): string => {

        let quotes: string = "";
        if (typeof id === "string" && !IsGuid(id)) {
            quotes = "'";
        }
        return `${quotes}${id}${quotes}`;
    }
}



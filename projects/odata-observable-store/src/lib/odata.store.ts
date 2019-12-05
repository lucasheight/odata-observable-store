import { Observable, BehaviorSubject, Subject, PartialObserver } from "rxjs";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { tap, map, filter, finalize } from "rxjs/operators";
import { IsGuid } from "./IsGuid";
import { IStoreNotifier, IStoreSettings } from "./IStore";
import { action } from "./action.type";
import { IOdataCollection } from "./IOdataCollection";

/**
 * Creates an Odata service store that follows the observable store pattern.
 *@description Provides default odata rest methods the handle the most common odata use.
 *In cases where public methods are not suffient use the protected methods, fillStore, updateStore and dispatchNotifier
 */
export abstract class ODataStore<T> {
  private _initState: IOdataCollection<T> = {
    "@odata.count": undefined,
    value: [] as T[]
  };
  /**
   * The base url for the odata service
   */
  abstract baseUrl: string;
  private _state$: BehaviorSubject<IOdataCollection<T>> = new BehaviorSubject(
    undefined
  );
  /**
   * Current Observable store state
   */
  public state$: Observable<
    IOdataCollection<T>
  > = this._state$
    .asObservable()
    .pipe(
      filter(f => typeof f === "object")
    ); /* only get objects not the default state */
  private _notifier$: Subject<IStoreNotifier<T>> = new Subject();

  /**Current notifier Observable state */
  public notifier$: Observable<
    IStoreNotifier<T>
  > = this._notifier$.asObservable();
  //public Notifier: Notifier<T>;
  private _response$: Subject<
    HttpResponse<IOdataCollection<T>>
  > = new Subject();
  /**Current response observable state */
  public response$: Observable<
    HttpResponse<IOdataCollection<T>>
  > = this._response$.asObservable();

  protected responseObserver$: PartialObserver<
    HttpResponse<T | IOdataCollection<T>>
  >;
  public complete: Function = () => {};
  public error: Function = () => {};

  //  Observer<HttpResponse<T>> = {
  //     next: (val) => { console.log("next", val) },
  //     complete: () => console.log("complete"),
  //     error: (err) => { }
  // };
  private _settings: IStoreSettings = {
    //default store settings
    notifyOnDelete: true,
    notifyOnGet: false,
    notifyOnInsert: true,
    notifyOnUpdate: true,
    use$countOnQuery: true
  };
  /**
   * constructor
   * @param http HttpClient
   * @param settings IStoreSettings
   */
  constructor(
    protected http: HttpClient,
    protected settings: IStoreSettings = null
  ) {
    if (settings) {
      this._settings = Object.assign({}, this._settings, settings);
    }
    this.responseObserver$ = {
      complete: (): void => {
        this.complete();
      }, //fire the complete callback,
      error: (err): void => {
        this.error(err);
      }
    };
  }
  /**
   * Method to return an OData collection
   * @param  queryString The additional query string without the ?.
   *This can be used to send in addtional odata parameters e.g $filter, $expand $select
   *@example query("$filter=Firstname eq 'john'&$expand=Address")
   * @returns void
   */
  public query = (queryString: string = null): void => {
    const segments: string[] = [];
    if (queryString) {
      segments.push(...queryString.split("&"));
    }
    if (this._settings.use$countOnQuery) {
      segments.push("$count=true");
    }

    //prepend the ? if there are segments
    const query: string = segments.length > 0 ? `?${segments.join("&")}` : "";

    this.responseObserver$.next = (s): void => {
      this._response$.next(s);
      const currentState = Object.assign(
        {},
        this._state$.getValue(),
        this._initState
      );
      currentState["@odata.count"] = s.body["@odata.count"];
      currentState.value = (s.body as IOdataCollection<T>).value;
      this.fillStore(currentState);
      this.dispatchNotifier("Query");
    };

    this.http
      .get<IOdataCollection<T>>(`${this.baseUrl}${query}`, {
        observe: "response"
      })
      .subscribe(this.responseObserver$);
  };
  /**
   * Gets a single result of T
   * @param value The object to located the key or keys
   * @param keys The key or keys to the property(ies) that identify the primary key('s)
   * @param  queryString The additional query string without the ?.
   *This can be used to send in addtional odata parameters e.g $filter, $expand $select
   *@example get(item,"Id","$expand=Address")
   * @returns Observable<t>
   */
  public get = <K extends keyof T>(
    value: T,
    keys: K | K[] = null,
    queryString: string = null
  ): Observable<T> => {
    const segments: string[] = [];
    if (queryString) {
      segments.push(...queryString.split("&"));
    }
    const query: string = segments.length > 0 ? `?${segments.join("&")}` : "";
    let id: string;
    if (Array.isArray(keys)) {
      id = keys.map(m => `${m}=${this.quoteKey(value[m as string])}`).join();
    } else {
      id = this.quoteKey(value[keys as string]);
    }

    const getObs = this.http
      .get<T>(`${this.baseUrl}(${id})${query}`, { observe: "response" })
      .pipe(
        tap(t => {
          this._response$.next(t);
          this.dispatchNotifier("Get");
        }),
        map(m => m.body),

        finalize(() => this.responseObserver$.complete())
      );
    return getObs;
  };
  /**
   * Posts a new item to the odata backend and appends the observable store with the new value
   * @param item The object to post
   * @param  queryString The additional query string without the ?.
   *This can be used to send in addtional odata parameters e.g. $filter, $expand $select
   * @returns void
   */
  public insert = (item: T, queryString: string = null): void => {
    const segments: string[] = [];
    if (queryString) {
      segments.push(...queryString.split("&"));
    }
    const query: string = segments.length > 0 ? `?${segments.join("&")}` : "";

    this.responseObserver$.next = (s): void => {
      this._response$.next(s);
      this.updateStore(s.body as T, "Insert");
    };

    this.http
      .post<T>(`${this.baseUrl}${query}`, item, { observe: "response" })
      .subscribe(this.responseObserver$);
  };
  /**
   * Updates an item to the odata backend and updates the observable store with the new value
   * @param item The object to update
   * @param keys The key or keys to the property(ies) that identify the primary key('s)
   * @param  queryString The additional query string without the ?.
   * This can be used to send in addtional odata parameters e.g. $filter, $expand $select
   * @param method The http method to use for the update.
   * @example update(item,"Id")
   * @example update(item,["Id","CategoryId"], null,"post")
   * @returns void
   */
  public update = <K extends keyof T>(
    item: T,
    keys: K | K[] = null,
    queryString: string = null,
    method: "put" | "post" = "put"
  ): void => {
    const segments: string[] = [];
    if (queryString) {
      segments.push(...queryString.split("&"));
    }
    const query: string = segments.length > 0 ? `?${segments.join("&")}` : "";
    let id: string;
    if (Array.isArray(keys)) {
      id = keys.map(m => `${m}=${this.quoteKey(item[m as string])}`).join();
    } else {
      id = this.quoteKey(item[keys as string]);
    }
    const url =
      keys != null
        ? `${this.baseUrl}(${id})${query}`
        : `${this.baseUrl}${query}`;
    let operation: Observable<HttpResponse<T>>;
    switch (method) {
      case "post":
        operation = this.http.post<T>(url, item, { observe: "response" });
        break;
      default:
        operation = this.http.put<T>(url, item, { observe: "response" });

        break;
    }

    this.responseObserver$.next = (s): void => {
      this._response$.next(s);
      this.updateStore(item, "Update", keys);
    };

    operation.subscribe(this.responseObserver$);
  };
  /**
   * Patches an item to the odata backend and updates the observable store with the new value
   * @param item The object to patch
   * @param keys The key or keys to the property(ies) that identify the primary key('s)
   * @param  queryString The additional query string without the ?.
   * This can be used to send in addtional odata parameters e.g. $filter, $expand $select
   * @param method The http method to use for the update.
   * @example patch(item,"Id")
   * @example patch(item,["Id","CategoryId"], null,"post")
   * @returns void
   */
  public patch = <K extends keyof T>(
    item: T,
    keys: K | K[] = null,
    queryString: string = null,
    method: "patch" | "put" | "post" = "patch"
  ): void => {
    const segments: string[] = [];
    if (queryString) {
      segments.push(...queryString.split("&"));
    }
    const query: string = segments.length > 0 ? `?${segments.join("&")}` : "";
    let id: string;
    if (Array.isArray(keys)) {
      id = keys.map(m => `${m}=${this.quoteKey(item[m as string])}`).join();
    } else {
      id = this.quoteKey(item[keys as string]);
    }
    const url =
      keys != null
        ? `${this.baseUrl}(${id})${query}`
        : `${this.baseUrl}${query}`;
    let operation: Observable<HttpResponse<{}>>;
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

    this.responseObserver$.next = (val): void => {
      this._response$.next(val);
      this.updateStore(item, "Update", keys);
    };

    operation.subscribe(this.responseObserver$);
  };
  /**
   * Deletes an item from the odata backend and removes item from the observable store
   * @param item The object to update
   * @param keys The key or keys to the property(ies) that identify the primary key('s)
   * @param method The http method to use for the update.
   * @example delete(item,"Id")
   * @example delete(item,["Id","CategoryId"], "post")
   * @returns void
   */
  public remove = <K extends keyof T>(
    item: T,
    keys: K | K[] = null,
    method: "delete" | "post" = "delete"
  ): void => {
    let id: string;
    if (Array.isArray(keys)) {
      id = keys.map(m => `${m}=${this.quoteKey(item[m as string])}`).join();
    } else {
      id = this.quoteKey(item[keys as string]);
    }

    const url: string =
      keys != null ? `${this.baseUrl}(${id})` : `${this.baseUrl}`;
    const operation =
      method == "delete"
        ? this.http.delete(url, { observe: "response" })
        : this.http.post<T>(url, item, { observe: "response" });

    this.responseObserver$.next = (s): void => {
      this._response$.next(s);
      this.updateStore(item, "Delete", keys);
    };

    operation.subscribe(this.responseObserver$);
  };

  /**
   * Updates Observable store $state and dispatches notifier$
   * @param item {T} The item to update
   * @param operation {string}
   * @param keys The key or keys to the property(ies) that identify the primary key('s)
   * @example updateStore(item,"update","Id");
   * @returns void
   */
  protected updateStore = <K extends keyof T>(
    item: T,
    operation: action,
    keys: K | K[] = null
  ): void => {
    const _store = Object.assign({}, this._initState, this._state$.getValue());
    if (
      _store.value.length === 0 &&
      (operation === "Update" || operation === "Delete")
    ) {
      //prevent store updating if it has not been previously populated for updates and deletes
      //const k = Object.keys(action).find(f => f.toLowerCase() == operation.toLowerCase());
      this.dispatchNotifier(operation, item);
      return;
    }
    let newState: IOdataCollection<T>;
    let values: T[];
    switch (operation) {
      case "Insert":
        values = [item, ..._store.value];
        newState = {
          "@odata.count": _store["@odata.count"] + 1,
          value: values
        };
        this.fillStore(newState);
        this.dispatchNotifier("Insert", item);

        break;
      case "Delete":
        if (Array.isArray(keys)) {
          //use reduce to find items to remove
          const removed = keys.reduce((acc, curr) => {
            const itemKey = item[curr as string];
            const isItemKeyDate = itemKey instanceof Date;
            acc = acc.filter(f => {
              const currItem = f[curr as string];
              //check if key is Date and compare with getTime()
              return isItemKeyDate
                ? (itemKey as Date).getTime() === (currItem as Date).getTime()
                : itemKey === currItem;
            });
            return acc;
          }, _store.value);
          if (removed.length == 0) {
            console.warn(
              "Update odata stored failed: Keys provided cannot be found."
            );
          }
          //then filter from original array
          values = _store.value.filter(f => removed.indexOf(f));
        } else {
          const found = _store.value.some(f => f[keys as string] == item[keys]);
          if (!found) {
            console.warn(
              "Update odata stored failed: Key provided cannot be found."
            );
          }
          values = _store.value.filter(f => f[keys as string] != item[keys]);
        }
        newState = {
          "@odata.count": _store["@odata.count"] - 1,
          value: values
        };
        this.fillStore(newState);
        this.dispatchNotifier("Delete", item);
        break;
      case "Update": {
        const res = Object.assign({}, this._initState, this._state$.getValue());
        let foundIdx: number;
        if (Array.isArray(keys)) {
          values = keys.reduce((acc, curr) => {
            const itemKey = item[curr as string];
            const isItemKeyDate = itemKey instanceof Date;
            acc = acc.filter(f => {
              const currItem = f[curr as string];
              //check if key is Date and compare with getTime()
              return isItemKeyDate
                ? (itemKey as Date).getTime() === (currItem as Date).getTime()
                : itemKey === currItem;
            });
            return acc;
          }, _store.value);
          if (values.length == 0) {
            console.warn(
              "Update odata stored failed: Keys provided cannot be found."
            );
          }
          foundIdx = res.value.findIndex(f => f == values[0]);
        } else {
          foundIdx = res.value.findIndex(
            f => f[keys as string] == item[keys as string]
          );
          if (foundIdx == -1) {
            console.warn(
              "Update odata stored failed: Key provided cannot be found."
            );
          }
        }

        const updated = Object.assign({}, res.value[foundIdx], item);
        values = [
          ...res.value.slice(0, foundIdx),
          updated,
          ...res.value.slice(foundIdx + 1)
        ];
        newState = { "@odata.count": res["@odata.count"], value: values };
        this.fillStore(newState);
        this.dispatchNotifier("Update", item);
        break;
      }
      default:
        throw "Invalid data store operation";
    }
  };
  /**
   * Fill the observable store state$ with an OData Collection
   * @param odata IOdataCollection<T>
   * @returns void
   */
  protected fillStore = (odata: IOdataCollection<T>): void => {
    this._state$.next(odata);
  };

  /**
   * Dispatches the notifier$ observable
   * @returns void
   * @param act {action} action enum
   * @param state {T} the current state
   */
  protected dispatchNotifier = (act: action, state: T = null): void => {
    const settings = this._settings;
    const note: IStoreNotifier<T> = { action: act, state: state };
    const store = this._state$.getValue();
    switch (act) {
      case "Query":
        note.message = `Query returned ${
          store ? (store.value ? store.value.length : 0) : 0
        } records.`;
        break;
      case "Get":
        note.message = `Get action completed`;
        break;
      case "Delete":
        note.message = `Record deleted`;
        break;
      case "Insert":
        note.message = `New record inserted`;
        break;
      case "Update":
        note.message = `Record updated`;
        break;
      default:
        break;
    }
    if (
      (settings.notifyOnDelete && act == "Delete") ||
      (settings.notifyOnGet && act == "Get") ||
      (settings.notifyOnGet && act == "Query") ||
      (settings.notifyOnInsert && act == "Insert") ||
      (settings.notifyOnUpdate && act == "Update")
    ) {
      this._notifier$.next(note);
    }
  };

  /**Determines if string key should be single quoted .
   * @description The main use case for this method is to determine if the key is a guid.
   * If so, do not quote the string.
   */
  private quoteKey = (id: string | number): string => {
    let quotes: string = "";
    if (typeof id === "string" && !IsGuid(id)) {
      quotes = "'";
    }
    return `${quotes}${id}${quotes}`;
  };
}

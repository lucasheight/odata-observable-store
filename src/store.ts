import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { IStoreNotifier, IStoreSettings } from './IStore';
import { action } from './action.enum';



export abstract class Store<T> {
    public state$: Observable<T>;
    protected _state$: BehaviorSubject<T>;
    protected _notifier$: Subject<IStoreNotifier<T>> = new Subject();
    public notifier$: Observable<IStoreNotifier<T>> = this._notifier$.asObservable();
    private _settings: IStoreSettings = {
        //defaults
        notifyOnDelete: true,
        notifyOnGet: false,
        notifyOnInsert: true,
        notifyOnUpdate: true
    };
    constructor(initialState: T, protected settings: IStoreSettings = null) {
        if (settings) {
            this._settings = Object.assign({}, this._settings, settings);
        }
        this._state$ = new BehaviorSubject(initialState);
        this.state$ = this._state$.asObservable();
    }

    protected getState(): T {
        return this._state$.getValue();
    }
    protected setState(val: T) {
        this._state$.next(val);
    }
    protected dispatchNotifier = (act: action, state: T = null): void => {
        let settings = this._settings;
        let note: IStoreNotifier<T> = { action: act, state: state }
        let store = this._state$.getValue();
        switch (act) {
            case action.Query:
                note.message = `Query completed.`;
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
            || settings.notifyOnGet && act == action.Query
            || settings.notifyOnInsert && act == action.Insert
            || settings.notifyOnUpdate && act == action.Update
        ) {
            this._notifier$.next(note);
        }

    }
}

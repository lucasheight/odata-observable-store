import { Observable, BehaviorSubject, Subject } from "rxjs";
import { IStoreNotifier, IStoreSettings } from "./IStore";
import { action } from "./action.type";

export abstract class Store<T> {
  public state$: Observable<T>;
  protected _state$: BehaviorSubject<T>;
  protected _notifier$: Subject<IStoreNotifier<T>> = new Subject();
  public notifier$: Observable<
    IStoreNotifier<T>
  > = this._notifier$.asObservable();
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
  protected setState(val: T): void {
    this._state$.next(val);
  }
  protected dispatchNotifier = (act: action, state: T = null): void => {
    const settings = this._settings;
    const note: IStoreNotifier<T> = { action: act, state: state };
    switch (act) {
      case "Query":
        note.message = `Query completed.`;
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
}

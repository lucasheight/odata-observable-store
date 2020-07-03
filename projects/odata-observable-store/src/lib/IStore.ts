import { action } from "./action.type";
import { IOdataCollection } from "./IOdataCollection";
import { HttpHeaders } from "@angular/common/http";

export interface IStoreNotifier<T> {
  action: action;
  state?: T | IOdataCollection<T>;
  message?: string;
}
export interface IStoreSettings {
  notifyOnGet?: boolean;
  notifyOnInsert?: boolean;
  notifyOnUpdate?: boolean;
  notifyOnDelete?: boolean;
  use$countOnQuery?: boolean;
  prependInserts?: boolean;
  insertHeaders?: HttpHeaders;
  updateHeaders?: HttpHeaders;
  patchHeaders?: HttpHeaders;
  deleteHeaders?: HttpHeaders;
  getHeaders?: HttpHeaders;
  updateStoreFromBackend?: boolean;
  insertStoreFromBackend?: boolean;
  patchStoreFromBackend?: boolean;
}

import { action } from "./action.type";
import { IOdataCollection } from "./IOdataCollection";

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
}

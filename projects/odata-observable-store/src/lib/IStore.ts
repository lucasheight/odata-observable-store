import { action } from "./action.enum";

export interface IStoreNotifier<T> {
    action: action;
    state?: T;
    message?: string;
}
export interface IStoreSettings {
    notifyOnGet?: boolean;
    notifyOnInsert?: boolean;
    notifyOnUpdate?: boolean;
    notifyOnDelete?: boolean;
}
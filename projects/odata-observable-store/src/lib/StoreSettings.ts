import { IStoreSettings } from "./IStore";
import { HttpHeaders } from "@angular/common/http";
export class StoreSettings implements IStoreSettings {
  /**@Default false*/
  notifyOnGet?: boolean = false;
  /**@Default true */
  notifyOnDelete?: boolean = true;
  /**@Default true */
  notifyOnInsert?: boolean = true;
  /**@Default true */
  notifyOnUpdate?: boolean = true;
  /**@Default true */
  prependInserts?: boolean = true;
  /**@Default true */
  use$countOnQuery?: boolean = true;
  insertHeaders?: HttpHeaders;
  updateHeaders?: HttpHeaders;
  deleteHeaders?: HttpHeaders;
  getHeaders?: HttpHeaders;
  patchHeaders?: HttpHeaders;
  /**@Default true  */
  insertStoreFromBackend?: boolean = true;
  /**@Default false*/
  updateStoreFromBackend?: boolean = false;
  /**@Default false */
  patchStoreFromBackend?: boolean = false;
}

import { IStoreSettings } from "./IStore";
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
}

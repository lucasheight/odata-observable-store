import { Injectable } from "@angular/core";
import { IPeople } from "./IPeople";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ODataStore } from "projects/odata-observable-store/src/lib/odata.store";

//import { ODataStore, IStoreSettings } from "@lucasheight/odata-observable-store"

@Injectable({
  providedIn: "root",
})
export class PeopleService extends ODataStore<IPeople> {
  baseUrl: string = "/People";
  // private subs$ = new Subscription();
  constructor(protected http: HttpClient) {
    super(http, { notifyOnGet: true, use$countOnQuery: false });
  }
  //demonstrates how to apply a filter to a query
  queryByFirstName = (query: string): void => {
    const filter = `$filter=contains(FirstName,'${query}')`;
    this.query(filter);
  };
  count = (): Observable<number> =>
    this.http.get<number>(`${this.baseUrl}/$count`);
}

import { Injectable } from '@angular/core';
import { ODataStore, IStoreSettings } from '@lucasheight/odata-observable-store';
import { IPeople } from './IPeople';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeopleService extends ODataStore<IPeople>{
  baseUrl: string = "https://services.odata.org/TripPinRESTierService/(S(jak0ecbo4gepctqprey0mz4b))/People";

  constructor(protected http: HttpClient) {
    super(http, {notifyOnGet:true});
  }
  queryByFirstName = (query: string): void => {
    let filter = `$filter=contains(FirstName,'${query}')`;
    this.query(filter);
  }
}

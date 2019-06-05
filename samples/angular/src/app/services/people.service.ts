import { Injectable } from '@angular/core';
import { ODataStore, IStoreSettings } from '../../../../../src' //'@lucasheight/odata-observable-store';
import { IPeople } from './IPeople';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeopleService extends ODataStore<IPeople>{
  baseUrl: string = "/People";

  constructor(protected http: HttpClient) {
    super(http, {notifyOnGet:true});
  }
  queryByFirstName = (query: string): void => {
    let filter = `$filter=contains(FirstName,'${query}')`;
    this.query(filter);
  }
}

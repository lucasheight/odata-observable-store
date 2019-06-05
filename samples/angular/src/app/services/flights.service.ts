import { Injectable } from '@angular/core';
import { ODataStore } from "@lucasheight/odata-observable-store";
import { IFlight } from './IFlight';
import { HttpClient } from '@angular/common/http';
//import {ODataStore} from "../../../../../src/odata.store";

@Injectable({
  providedIn: 'root'
})
export class FlightsService extends ODataStore<IFlight>{
baseUrl:string ="/Airports"
  constructor(protected http: HttpClient) {
    super(http);
  }
}

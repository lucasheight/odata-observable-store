import { Injectable } from '@angular/core';
import { ODataStore } from "@lucasheight/odata-observable-store";
import { IFlight } from './IFlight';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightsService extends ODataStore<IFlight>{
baseUrl:string ="https://services.odata.org/TripPinRESTierService"
  constructor(protected http: HttpClient) {
    super(http);
  }
}

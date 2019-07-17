# OData Observable Store - State management for Angular Odata services

OData Observable Store is a simple state management library that implements the observable store pattern for odata api's within Angular.


The library provides public methods for query, get, update, patch, insert and remove while maintaining state on the service.

Generally for most CRUD odata services, all that is required is to extend the `ODataStore` and provide the `baseUrl` field.

## Installation

Install the npm package @lucasheight/odata-observable-store.
```
    npm install --save @lucasheight/odata-observable-store
```

## How to use
The snippets below are based on the example provided in the projects folder of this repository which uses the [TripPin Sample Service](https://services.odata.org/TripPinRESTierService).
More information on the service can be found here https://www.odata.org/odata-services/.

### Create the IPeople interface
```javascript
export interface IPeople{
    UserName:string;
    FirstName:string;
    LastName:string;
    MiddleName?:string;
    Gender:Gender;
    Age?:string|number;
    Emails?:string[];
    FavouriteFeature:string;
    Features:string[];
    Cost?:number;
    Budget?:number;
    AddressInfo:IAddress;
    HomeAddress?:any;
}

export interface IAddress{
    Address?:string;
    City?:ICity;
}
export interface ICity{
    Name:string;
    CountryRegion:string;
    Region:string;
}
export enum Gender{
    Male="Male",Female="Female",Unknown="Unknown"
}
```
### Create a new angular service
```javascript
import { Injectable } from '@angular/core';
import { IPeople } from './IPeople';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ODataStore,IStoreSettings} from "@lucasheight/odata-observable-store"

@Injectable({
  providedIn: 'root'
})
export class PeopleService extends ODataStore<IPeople>{
  baseUrl: string = "/People";

  constructor(protected http: HttpClient) {
    super(http, {notifyOnGet:true});
  }
  //demonstrates how to apply a filter to a query
  queryByFirstName = (query: string): void => {
    let filter = `$filter=contains(FirstName,'${query}')`;
    this.query(filter);
  }
  count = ():Observable<number>=> this.http.get<number>(`${this.baseUrl}/$count`)
}
```
### Use in a component
``` javascript
import { PeopleService } from '../services/people.service';
import { takeUntil, filter, map } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { IPeople } from '../services/IPeople';
import { action } from 'odata-observable-store/public-api';
@Component({
    selector: 'app-people',
    templateUrl: './people.component.html'
})
export class PeopleComponent implements OnInit, OnDestroy {
    destroy$: Subject<void> = new Subject();
    people$: Observable<IPeople[]>;
    person$: Observable<IPeople>;
    constructor(private peopleService: PeopleService) { }
    ngOnInit(): void {
        //subscribe to the notifier observable to receive messages on state changes
        this.peopleService.notifier$.pipe(takeUntil(this.destroy$)).subscribe(s => {
            //do something with the messages
            console.log(action[s.action], s.message)
        });
        //set up the people$ observable and map the odata value to an array of IPeople[]
        this.people$ = this.peopleService.state$.pipe(takeUntil(this.destroy$), map(m => m.value));
        //load some data
        this.query();
    }
    private query = (): void => {
        //hydrate the odata observable store by calling the query method 
        this.peopleService.query();
    }
    private update = (item: IPeople): void => {
        this.peopleService.update(item, "UserName");
    }
    private patch = (item: IPeople): void => {
        this.peopleService.patch(item, "UserName");
    }
    private insert = (item: IPeople): void => {
        this.peopleService.insert(item);
    }
    private delete = (item: IPeople): void => {
        this.peopleService.remove(item, "UserName");
    }

    ngOnDestroy(): void {
        //unsubscribe 
        this.destroy$.next();
    }


}
```
### Check out the example app

The [example app](https://github.com/lucasheight/odata-observable-store/tree/master/projects/example) can be found under the projects folder of this repository


### [API Documentation](https://github.com/lucasheight/odata-observable-store/blob/master/projects/odata-observable-store/docs/globals.md)

### Dependencies
Rxjs, Angular

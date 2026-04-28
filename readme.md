## OData Observable Store — State management for Angular OData services

OData Observable Store is a lightweight state management library that implements the observable store pattern for OData v4 APIs within Angular. It provides typed, reactive CRUD operations (query, get, insert, update, patch, remove) while keeping the service state as an Observable that components can subscribe to.

### Requirements

| Dependency | Version |
|---|---|
| Angular | >= 6 |
| RxJS | >= 6.4 |

> Tested against Angular 21 / RxJS 7.

### Installation

```bash
npm install --save @lucasheight/odata-observable-store
```

### Quick start

The snippets below are based on the [TripPin OData v4 sample service](https://services.odata.org/TripPinRESTierService).

#### 1. Create a typed service

Extend `ODataStore<T>`, provide `baseUrl`, and inject `HttpClient`:

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ODataStore } from '@lucasheight/odata-observable-store';
import { IPeople } from './IPeople';

@Injectable({ providedIn: 'root' })
export class PeopleService extends ODataStore<IPeople> {
  baseUrl = '/People';

  constructor(protected http: HttpClient) {
    super(http, { notifyOnGet: true });
  }

  queryByFirstName = (query: string): void => {
    this.query(`$filter=contains(FirstName,'${query}')`);
  };

  count = (): Observable<number> =>
    this.http.get<number>(`${this.baseUrl}/$count`);
}
```

#### 2. Use in a component

```typescript
@Component({ ... })
export class PeopleComponent implements OnInit {
  people$ = this.peopleService.state$.pipe(map(s => s.value));

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.peopleService.query();
  }

  save(item: IPeople): void {
    this.peopleService.insert(item);
  }

  update(item: IPeople): void {
    this.peopleService.patch(item, 'UserName');
  }

  remove(item: IPeople): void {
    this.peopleService.remove(item, 'UserName');
  }
}
```

#### 3. Provide HttpClient

```typescript
// app.config.ts (standalone)
export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient()]
};

// app.module.ts (NgModule)
@NgModule({
  imports: [HttpClientModule],
})
export class AppModule {}
```

### API

| Method | Returns | Description |
|---|---|---|
| `query(queryString?)` | `void` | Hydrates the store via GET |
| `query$(queryString?)` | `Observable<IOdataCollection<T>>` | Observable version of query |
| `get(value, keys?, queryString?)` | `Observable<T>` | Fetch a single entity |
| `insert(item, queryString?)` | `void` | POST and append to store |
| `insert$(item, queryString?)` | `Observable<T>` | Observable version of insert |
| `update(item, keys?, queryString?, method?)` | `void` | PUT/POST and update store |
| `update$(item, keys?, queryString?, method?)` | `Observable<T>` | Observable version of update |
| `patch(item, keys?, queryString?, method?)` | `void` | PATCH and update store |
| `patch$(item, keys?, queryString?, method?)` | `Observable<T>` | Observable version of patch |
| `remove(item, keys?, method?)` | `void` | DELETE and remove from store |
| `remove$(item, keys?, method?)` | `Observable<void>` | Observable version of remove |

**Observables on the store:**

| Property | Type | Description |
|---|---|---|
| `state$` | `Observable<IOdataCollection<T>>` | Current collection state |
| `notifier$` | `Observable<IStoreNotifier<T>>` | Action notifications |
| `response$` | `Observable<HttpResponse<...>>` | Raw HTTP responses |

### [Full API documentation](projects/odata-observable-store/docs/README.md)

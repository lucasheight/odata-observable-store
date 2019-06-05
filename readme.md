## OData Observable Store - State management for Angular Odata services

OData Observable Store is a simple state management library that implements the observable store pattern for odata api's within Angular.


The library provides public methods for query, get, update, patch, insert and remove while maintaining state on the service.

Generally for most CRUD odata services, all that is required is to extend the `ODataStore` and provide the `baseUrl` field.

### Dependencies
Rxjs, Angular
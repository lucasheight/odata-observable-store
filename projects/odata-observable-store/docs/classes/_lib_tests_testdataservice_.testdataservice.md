[@lucasheight/odata-observable-store - v1.2.1](../README.md) › [Globals](../globals.md) › ["lib/tests/TestDataService"](../modules/_lib_tests_testdataservice_.md) › [TestDataService](_lib_tests_testdataservice_.testdataservice.md)

# Class: TestDataService

## Hierarchy

* [ODataStore](_lib_odata_store_.odatastore.md)‹[ITestData](../interfaces/_lib_tests_testdata_.itestdata.md)›

  ↳ **TestDataService**

## Index

### Constructors

* [constructor](_lib_tests_testdataservice_.testdataservice.md#constructor)

### Properties

* [baseUrl](_lib_tests_testdataservice_.testdataservice.md#baseurl)
* [http](_lib_tests_testdataservice_.testdataservice.md#protected-http)
* [notifier$](_lib_tests_testdataservice_.testdataservice.md#notifier)
* [response$](_lib_tests_testdataservice_.testdataservice.md#response)
* [responseObserver$](_lib_tests_testdataservice_.testdataservice.md#protected-responseobserver)
* [settings](_lib_tests_testdataservice_.testdataservice.md#protected-settings)
* [state$](_lib_tests_testdataservice_.testdataservice.md#state)

### Methods

* [complete](_lib_tests_testdataservice_.testdataservice.md#complete)
* [dispatchNotifier](_lib_tests_testdataservice_.testdataservice.md#protected-dispatchnotifier)
* [error](_lib_tests_testdataservice_.testdataservice.md#error)
* [fill](_lib_tests_testdataservice_.testdataservice.md#fill)
* [fillStore](_lib_tests_testdataservice_.testdataservice.md#protected-fillstore)
* [get](_lib_tests_testdataservice_.testdataservice.md#get)
* [insert](_lib_tests_testdataservice_.testdataservice.md#insert)
* [insert$](_lib_tests_testdataservice_.testdataservice.md#insert)
* [patch](_lib_tests_testdataservice_.testdataservice.md#patch)
* [patch$](_lib_tests_testdataservice_.testdataservice.md#patch)
* [query](_lib_tests_testdataservice_.testdataservice.md#query)
* [query$](_lib_tests_testdataservice_.testdataservice.md#query)
* [remove](_lib_tests_testdataservice_.testdataservice.md#remove)
* [remove$](_lib_tests_testdataservice_.testdataservice.md#remove)
* [update](_lib_tests_testdataservice_.testdataservice.md#update)
* [update$](_lib_tests_testdataservice_.testdataservice.md#update)
* [updateStore](_lib_tests_testdataservice_.testdataservice.md#protected-updatestore)

## Constructors

###  constructor

\+ **new TestDataService**(`http`: HttpClient): *[TestDataService](_lib_tests_testdataservice_.testdataservice.md)*

*Overrides [ODataStore](_lib_odata_store_.odatastore.md).[constructor](_lib_odata_store_.odatastore.md#constructor)*

*Defined in [lib/tests/TestDataService.ts:8](https://github.com/lucasheight/odata-observable-store/blob/b97261dd/projects/odata-observable-store/src/lib/tests/TestDataService.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`http` | HttpClient |

**Returns:** *[TestDataService](_lib_tests_testdataservice_.testdataservice.md)*

## Properties

###  baseUrl

• **baseUrl**: *string* = "/data"

*Overrides [ODataStore](_lib_odata_store_.odatastore.md).[baseUrl](_lib_odata_store_.odatastore.md#abstract-baseurl)*

*Defined in [lib/tests/TestDataService.ts:8](https://github.com/lucasheight/odata-observable-store/blob/b97261dd/projects/odata-observable-store/src/lib/tests/TestDataService.ts#L8)*

___

### `Protected` http

• **http**: *HttpClient*

*Overrides [ODataStore](_lib_odata_store_.odatastore.md).[http](_lib_odata_store_.odatastore.md#protected-http)*

*Defined in [lib/tests/TestDataService.ts:9](https://github.com/lucasheight/odata-observable-store/blob/b97261dd/projects/odata-observable-store/src/lib/tests/TestDataService.ts#L9)*

___

###  notifier$

• **notifier$**: *Observable‹[IStoreNotifier](../interfaces/_lib_istore_.istorenotifier.md)‹[ITestData](../interfaces/_lib_tests_testdata_.itestdata.md)››* =  this._notifier$.asObservable()

*Inherited from [ODataStore](_lib_odata_store_.odatastore.md).[notifier$](_lib_odata_store_.odatastore.md#notifier)*

*Defined in [lib/odata.store.ts:39](https://github.com/lucasheight/odata-observable-store/blob/b97261dd/projects/odata-observable-store/src/lib/odata.store.ts#L39)*

Current notifier Observable state

___

###  response$

• **response$**: *Observable‹HttpResponse‹[IOdataCollection](../interfaces/_lib_iodatacollection_.iodatacollection.md)‹[ITestData](../interfaces/_lib_tests_testdata_.itestdata.md)›››* =  this._response$.asObservable()

*Inherited from [ODataStore](_lib_odata_store_.odatastore.md).[response$](_lib_odata_store_.odatastore.md#response)*

*Defined in [lib/odata.store.ts:47](https://github.com/lucasheight/odata-observable-store/blob/b97261dd/projects/odata-observable-store/src/lib/odata.store.ts#L47)*

Current response observable state

___

### `Protected` responseObserver$

• **responseObserver$**: *PartialObserver‹HttpResponse‹[ITestData](../interfaces/_lib_tests_testdata_.itestdata.md) | [IOdataCollection](../interfaces/_lib_iodatacollection_.iodatacollection.md)‹[ITestData](../interfaces/_lib_tests_testdata_.itestdata.md)›››*

*Inherited from [ODataStore](_lib_odata_store_.odatastore.md).[responseObserver$](_lib_odata_store_.odatastore.md#protected-responseobserver)*

*Defined in [lib/odata.store.ts:51](https://github.com/lucasheight/odata-observable-store/blob/b97261dd/projects/odata-observable-store/src/lib/odata.store.ts#L51)*

___

### `Protected` settings

• **settings**: *[StoreSettings](_lib_storesettings_.storesettings.md)*

*Inherited from [ODataStore](_lib_odata_store_.odatastore.md).[settings](_lib_odata_store_.odatastore.md#protected-settings)*

*Defined in [lib/odata.store.ts:70](https://github.com/lucasheight/odata-observable-store/blob/b97261dd/projects/odata-observable-store/src/lib/odata.store.ts#L70)*

IStoreSettings

___

###  state$

• **state$**: *Observable‹[IOdataCollection](../interfaces/_lib_iodatacollection_.iodatacollection.md)‹[ITestData](../interfaces/_lib_tests_testdata_.itestdata.md)››* =  this._state$
    .asObservable()
    .pipe(
      filter(f => typeof f === "object")
    )

*Inherited from [ODataStore](_lib_odata_store_.odatastore.md).[state$](_lib_odata_store_.odatastore.md#state)*

*Defined in [lib/odata.store.ts:29](https://github.com/lucasheight/odata-observable-store/blob/b97261dd/projects/odata-observable-store/src/lib/odata.store.ts#L29)*

Current Observable store state

## Methods

###  complete

▸ **complete**(): *void*

*Inherited from [ODataStore](_lib_odata_store_.odatastore.md)*

*Defined in [lib/odata.store.ts:55](https://github.com/lucasheight/odata-observable-store/blob/b97261dd/projects/odata-observable-store/src/lib/odata.store.ts#L55)*

**Returns:** *void*

___

### `Protected` dispatchNotifier

▸ **dispatchNotifier**(`act`: [action](../modules/_lib_action_type_.md#action), `state`: [ITestData](../interfaces/_lib_tests_testdata_.itestdata.md) | [IOdataCollection](../interfaces/_lib_iodatacollection_.iodatacollection.md)‹[ITestData](../interfaces/_lib_tests_testdata_.itestdata.md)›): *void*

*Inherited from [ODataStore](_lib_odata_store_.odatastore.md)*

*Defined in [lib/odata.store.ts:596](https://github.com/lucasheight/odata-observable-store/blob/b97261dd/projects/odata-observable-store/src/lib/odata.store.ts#L596)*

Dispatches the notifier$ observable

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`act` | [action](../modules/_lib_action_type_.md#action) | - | action enum |
`state` | [ITestData](../interfaces/_lib_tests_testdata_.itestdata.md) &#124; [IOdataCollection](../interfaces/_lib_iodatacollection_.iodatacollection.md)‹[ITestData](../interfaces/_lib_tests_testdata_.itestdata.md)› |  null | the current state  |

**Returns:** *void*

void

___

###  error

▸ **error**(): *void*

*Inherited from [ODataStore](_lib_odata_store_.odatastore.md)*

*Defined in [lib/odata.store.ts:57](https://github.com/lucasheight/odata-observable-store/blob/b97261dd/projects/odata-observable-store/src/lib/odata.store.ts#L57)*

**Returns:** *void*

___

###  fill

▸ **fill**(`odata`: [IOdataCollection](../interfaces/_lib_iodatacollection_.iodatacollection.md)‹[ITestData](../interfaces/_lib_tests_testdata_.itestdata.md)›): *void*

*Defined in [lib/tests/TestDataService.ts:12](https://github.com/lucasheight/odata-observable-store/blob/b97261dd/projects/odata-observable-store/src/lib/tests/TestDataService.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`odata` | [IOdataCollection](../interfaces/_lib_iodatacollection_.iodatacollection.md)‹[ITestData](../interfaces/_lib_tests_testdata_.itestdata.md)› |

**Returns:** *void*

___

### `Protected` fillStore

▸ **fillStore**(`odata`: [IOdataCollection](../interfaces/_lib_iodatacollection_.iodatacollection.md)‹[ITestData](../interfaces/_lib_tests_testdata_.itestdata.md)›): *void*

*Inherited from [ODataStore](_lib_odata_store_.odatastore.md)*

*Defined in [lib/odata.store.ts:586](https://github.com/lucasheight/odata-observable-store/blob/b97261dd/projects/odata-observable-store/src/lib/odata.store.ts#L586)*

Fill the observable store state$ with an OData Collection

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`odata` | [IOdataCollection](../interfaces/_lib_iodatacollection_.iodatacollection.md)‹[ITestData](../interfaces/_lib_tests_testdata_.itestdata.md)› | IOdataCollection<T> |

**Returns:** *void*

void

___

###  get

▸ **get**<**K**>(`value`: [ITestData](../interfaces/_lib_tests_testdata_.itestdata.md), `keys`: K | K[], `queryString`: string): *Observable‹[ITestData](../interfaces/_lib_tests_testdata_.itestdata.md)›*

*Inherited from [ODataStore](_lib_odata_store_.odatastore.md)*

*Defined in [lib/odata.store.ts:163](https://github.com/lucasheight/odata-observable-store/blob/b97261dd/projects/odata-observable-store/src/lib/odata.store.ts#L163)*

Gets a single result of T

**Type parameters:**

▪ **K**: *keyof ITestData*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`value` | [ITestData](../interfaces/_lib_tests_testdata_.itestdata.md) | - | The object to located the key or keys |
`keys` | K &#124; K[] |  null | The key or keys to the property(ies) that identify the primary key('s) |
`queryString` | string |  null | The additional query string without the ?. This can be used to send in additional odata parameters e.g $filter, $expand $select |

**Returns:** *Observable‹[ITestData](../interfaces/_lib_tests_testdata_.itestdata.md)›*

Observable<t>

___

###  insert

▸ **insert**(`item`: [ITestData](../interfaces/_lib_tests_testdata_.itestdata.md), `queryString`: string): *void*

*Inherited from [ODataStore](_lib_odata_store_.odatastore.md)*

*Defined in [lib/odata.store.ts:190](https://github.com/lucasheight/odata-observable-store/blob/b97261dd/projects/odata-observable-store/src/lib/odata.store.ts#L190)*

Posts a new item to the odata backend and appends the observable store with the new value

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`item` | [ITestData](../interfaces/_lib_tests_testdata_.itestdata.md) | - | The object to post |
`queryString` | string |  null | The additional query string without the ?. This can be used to send in additional odata parameters e.g. $filter, $expand $select |

**Returns:** *void*

void

___

###  insert$

▸ **insert$**(`item`: [ITestData](../interfaces/_lib_tests_testdata_.itestdata.md), `queryString`: string): *Observable‹[ITestData](../interfaces/_lib_tests_testdata_.itestdata.md)›*

*Inherited from [ODataStore](_lib_odata_store_.odatastore.md)*

*Defined in [lib/odata.store.ts:208](https://github.com/lucasheight/odata-observable-store/blob/b97261dd/projects/odata-observable-store/src/lib/odata.store.ts#L208)*

Posts a new item to the odata backend and appends the observable store with the new value

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`item` | [ITestData](../interfaces/_lib_tests_testdata_.itestdata.md) | - | The object to post |
`queryString` | string |  null | The additional query string without the ?. This can be used to send in additional odata parameters e.g. $filter, $expand $select |

**Returns:** *Observable‹[ITestData](../interfaces/_lib_tests_testdata_.itestdata.md)›*

Observable<T>

___

###  patch

▸ **patch**<**K**>(`item`: [ITestData](../interfaces/_lib_tests_testdata_.itestdata.md), `keys`: K | K[], `queryString`: string, `method`: "patch" | "put" | "post"): *void*

*Inherited from [ODataStore](_lib_odata_store_.odatastore.md)*

*Defined in [lib/odata.store.ts:318](https://github.com/lucasheight/odata-observable-store/blob/b97261dd/projects/odata-observable-store/src/lib/odata.store.ts#L318)*

Patches an item to the odata backend and updates the observable store with the new value

**Type parameters:**

▪ **K**: *keyof ITestData*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`item` | [ITestData](../interfaces/_lib_tests_testdata_.itestdata.md) | - | The object to patch |
`keys` | K &#124; K[] |  null | The key or keys to the property(ies) that identify the primary key('s) |
`queryString` | string |  null | The additional query string without the ?. This can be used to send in additional odata parameters e.g. $filter, $expand $select |
`method` | "patch" &#124; "put" &#124; "post" | "patch" | The http method to use for the update. |

**Returns:** *void*

void

___

###  patch$

▸ **patch$**<**K**>(`item`: [ITestData](../interfaces/_lib_tests_testdata_.itestdata.md), `keys`: K | K[], `queryString`: string, `method`: "patch" | "put" | "post"): *Observable‹[ITestData](../interfaces/_lib_tests_testdata_.itestdata.md)›*

*Inherited from [ODataStore](_lib_odata_store_.odatastore.md)*

*Defined in [lib/odata.store.ts:362](https://github.com/lucasheight/odata-observable-store/blob/b97261dd/projects/odata-observable-store/src/lib/odata.store.ts#L362)*

Patches an item to the odata backend and updates the observable store with the new value

**Type parameters:**

▪ **K**: *keyof ITestData*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`item` | [ITestData](../interfaces/_lib_tests_testdata_.itestdata.md) | - | The object to patch |
`keys` | K &#124; K[] |  null | The key or keys to the property(ies) that identify the primary key('s) |
`queryString` | string |  null | The additional query string without the ?. This can be used to send in additional odata parameters e.g. $filter, $expand $select |
`method` | "patch" &#124; "put" &#124; "post" | "patch" | The http method to use for the update. |

**Returns:** *Observable‹[ITestData](../interfaces/_lib_tests_testdata_.itestdata.md)›*

Observable<T>

___

###  query

▸ **query**(`queryString`: string): *void*

*Inherited from [ODataStore](_lib_odata_store_.odatastore.md)*

*Defined in [lib/odata.store.ts:91](https://github.com/lucasheight/odata-observable-store/blob/b97261dd/projects/odata-observable-store/src/lib/odata.store.ts#L91)*

Method to hydrate the store

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`queryString` | string |  null | The additional query string without the ?. This can be used to send in additional odata parameters e.g $filter, $expand $select |

**Returns:** *void*

void

___

###  query$

▸ **query$**(`queryString`: string): *Observable‹[IOdataCollection](../interfaces/_lib_iodatacollection_.iodatacollection.md)‹[ITestData](../interfaces/_lib_tests_testdata_.itestdata.md)››*

*Inherited from [ODataStore](_lib_odata_store_.odatastore.md)*

*Defined in [lib/odata.store.ts:124](https://github.com/lucasheight/odata-observable-store/blob/b97261dd/projects/odata-observable-store/src/lib/odata.store.ts#L124)*

Method to query the odata API and hydrate the store

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`queryString` | string |  null | The additional query string without the ?. This can be used to send in additional odata parameters e.g $filter, $expand $select |

**Returns:** *Observable‹[IOdataCollection](../interfaces/_lib_iodatacollection_.iodatacollection.md)‹[ITestData](../interfaces/_lib_tests_testdata_.itestdata.md)››*

Observable<IOdataCollection<T>>

___

###  remove

▸ **remove**<**K**>(`item`: [ITestData](../interfaces/_lib_tests_testdata_.itestdata.md), `keys`: K | K[], `method`: "delete" | "post"): *void*

*Inherited from [ODataStore](_lib_odata_store_.odatastore.md)*

*Defined in [lib/odata.store.ts:404](https://github.com/lucasheight/odata-observable-store/blob/b97261dd/projects/odata-observable-store/src/lib/odata.store.ts#L404)*

Deletes an item from the odata backend and removes item from the observable store

**Type parameters:**

▪ **K**: *keyof ITestData*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`item` | [ITestData](../interfaces/_lib_tests_testdata_.itestdata.md) | - | The object to update |
`keys` | K &#124; K[] |  null | The key or keys to the property(ies) that identify the primary key('s) |
`method` | "delete" &#124; "post" | "delete" | The http method to use for the update. |

**Returns:** *void*

void

___

###  remove$

▸ **remove$**<**K**>(`item`: [ITestData](../interfaces/_lib_tests_testdata_.itestdata.md), `keys`: K | K[], `method`: "delete" | "post"): *Observable‹void | Object›*

*Inherited from [ODataStore](_lib_odata_store_.odatastore.md)*

*Defined in [lib/odata.store.ts:433](https://github.com/lucasheight/odata-observable-store/blob/b97261dd/projects/odata-observable-store/src/lib/odata.store.ts#L433)*

Deletes an item from the odata backend and removes item from the observable store

**Type parameters:**

▪ **K**: *keyof ITestData*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`item` | [ITestData](../interfaces/_lib_tests_testdata_.itestdata.md) | - | The object to update |
`keys` | K &#124; K[] |  null | The key or keys to the property(ies) that identify the primary key('s) |
`method` | "delete" &#124; "post" | "delete" | The http method to use for the update. |

**Returns:** *Observable‹void | Object›*

Observable<void|Object>

___

###  update

▸ **update**<**K**>(`item`: [ITestData](../interfaces/_lib_tests_testdata_.itestdata.md), `keys`: K | K[], `queryString`: string, `method`: "put" | "post"): *void*

*Inherited from [ODataStore](_lib_odata_store_.odatastore.md)*

*Defined in [lib/odata.store.ts:235](https://github.com/lucasheight/odata-observable-store/blob/b97261dd/projects/odata-observable-store/src/lib/odata.store.ts#L235)*

Updates an item to the odata backend and updates the observable store with the new value

**Type parameters:**

▪ **K**: *keyof ITestData*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`item` | [ITestData](../interfaces/_lib_tests_testdata_.itestdata.md) | - | The object to update |
`keys` | K &#124; K[] |  null | The key or keys to the property(ies) that identify the primary key('s) |
`queryString` | string |  null | The additional query string without the ?. This can be used to send in additional odata parameters e.g. $filter, $expand $select |
`method` | "put" &#124; "post" | "put" | The http method to use for the update. |

**Returns:** *void*

void

___

###  update$

▸ **update$**<**K**>(`item`: [ITestData](../interfaces/_lib_tests_testdata_.itestdata.md), `keys`: K | K[], `queryString`: string, `method`: "put" | "post"): *Observable‹[ITestData](../interfaces/_lib_tests_testdata_.itestdata.md)›*

*Inherited from [ODataStore](_lib_odata_store_.odatastore.md)*

*Defined in [lib/odata.store.ts:276](https://github.com/lucasheight/odata-observable-store/blob/b97261dd/projects/odata-observable-store/src/lib/odata.store.ts#L276)*

Updates an item to the odata backend and updates the observable store with the new value

**Type parameters:**

▪ **K**: *keyof ITestData*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`item` | [ITestData](../interfaces/_lib_tests_testdata_.itestdata.md) | - | The object to update |
`keys` | K &#124; K[] |  null | The key or keys to the property(ies) that identify the primary key('s) |
`queryString` | string |  null | The additional query string without the ?. This can be used to send in additional odata parameters e.g. $filter, $expand $select |
`method` | "put" &#124; "post" | "put" | The http method to use for the update. |

**Returns:** *Observable‹[ITestData](../interfaces/_lib_tests_testdata_.itestdata.md)›*

Observable<Empty> | Observable<T>

___

### `Protected` updateStore

▸ **updateStore**<**K**>(`item`: [ITestData](../interfaces/_lib_tests_testdata_.itestdata.md), `operation`: [action](../modules/_lib_action_type_.md#action), `keys`: K | K[]): *void*

*Inherited from [ODataStore](_lib_odata_store_.odatastore.md)*

*Defined in [lib/odata.store.ts:462](https://github.com/lucasheight/odata-observable-store/blob/b97261dd/projects/odata-observable-store/src/lib/odata.store.ts#L462)*

Updates Observable store $state and dispatches notifier$

**Type parameters:**

▪ **K**: *keyof ITestData*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`item` | [ITestData](../interfaces/_lib_tests_testdata_.itestdata.md) | - | The item to update |
`operation` | [action](../modules/_lib_action_type_.md#action) | - | - |
`keys` | K &#124; K[] |  null | The key or keys to the property(ies) that identify the primary key('s) |

**Returns:** *void*

void

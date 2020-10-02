[@lucasheight/odata-observable-store](../README.md) › [Globals](../globals.md) › ["projects/odata-observable-store/src/lib/tests/TestDataService"](../modules/_projects_odata_observable_store_src_lib_tests_testdataservice_.md) › [TestDataService](_projects_odata_observable_store_src_lib_tests_testdataservice_.testdataservice.md)

# Class: TestDataService

## Hierarchy

* [ODataStore](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md)‹[ITestData](../interfaces/_projects_odata_observable_store_src_lib_tests_testdata_.itestdata.md)›

  ↳ **TestDataService**

## Index

### Constructors

* [constructor](_projects_odata_observable_store_src_lib_tests_testdataservice_.testdataservice.md#constructor)

### Properties

* [baseUrl](_projects_odata_observable_store_src_lib_tests_testdataservice_.testdataservice.md#baseurl)
* [http](_projects_odata_observable_store_src_lib_tests_testdataservice_.testdataservice.md#protected-http)
* [notifier$](_projects_odata_observable_store_src_lib_tests_testdataservice_.testdataservice.md#notifier)
* [response$](_projects_odata_observable_store_src_lib_tests_testdataservice_.testdataservice.md#response)
* [responseObserver$](_projects_odata_observable_store_src_lib_tests_testdataservice_.testdataservice.md#protected-responseobserver)
* [settings](_projects_odata_observable_store_src_lib_tests_testdataservice_.testdataservice.md#protected-settings)
* [state$](_projects_odata_observable_store_src_lib_tests_testdataservice_.testdataservice.md#state)

### Methods

* [complete](_projects_odata_observable_store_src_lib_tests_testdataservice_.testdataservice.md#complete)
* [dispatchNotifier](_projects_odata_observable_store_src_lib_tests_testdataservice_.testdataservice.md#protected-dispatchnotifier)
* [dispose](_projects_odata_observable_store_src_lib_tests_testdataservice_.testdataservice.md#protected-dispose)
* [error](_projects_odata_observable_store_src_lib_tests_testdataservice_.testdataservice.md#error)
* [fill](_projects_odata_observable_store_src_lib_tests_testdataservice_.testdataservice.md#fill)
* [fillStore](_projects_odata_observable_store_src_lib_tests_testdataservice_.testdataservice.md#protected-fillstore)
* [get](_projects_odata_observable_store_src_lib_tests_testdataservice_.testdataservice.md#get)
* [insert](_projects_odata_observable_store_src_lib_tests_testdataservice_.testdataservice.md#insert)
* [insert$](_projects_odata_observable_store_src_lib_tests_testdataservice_.testdataservice.md#insert)
* [patch](_projects_odata_observable_store_src_lib_tests_testdataservice_.testdataservice.md#patch)
* [patch$](_projects_odata_observable_store_src_lib_tests_testdataservice_.testdataservice.md#patch)
* [query](_projects_odata_observable_store_src_lib_tests_testdataservice_.testdataservice.md#query)
* [query$](_projects_odata_observable_store_src_lib_tests_testdataservice_.testdataservice.md#query)
* [remove](_projects_odata_observable_store_src_lib_tests_testdataservice_.testdataservice.md#remove)
* [remove$](_projects_odata_observable_store_src_lib_tests_testdataservice_.testdataservice.md#remove)
* [update](_projects_odata_observable_store_src_lib_tests_testdataservice_.testdataservice.md#update)
* [update$](_projects_odata_observable_store_src_lib_tests_testdataservice_.testdataservice.md#update)
* [updateStore](_projects_odata_observable_store_src_lib_tests_testdataservice_.testdataservice.md#protected-updatestore)

## Constructors

###  constructor

\+ **new TestDataService**(`http`: HttpClient): *[TestDataService](_projects_odata_observable_store_src_lib_tests_testdataservice_.testdataservice.md)*

*Overrides [ODataStore](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md).[constructor](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#constructor)*

*Defined in [projects/odata-observable-store/src/lib/tests/TestDataService.ts:8](https://github.com/lucasheight/odata-observable-store/blob/a92f36b7/projects/odata-observable-store/src/lib/tests/TestDataService.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`http` | HttpClient |

**Returns:** *[TestDataService](_projects_odata_observable_store_src_lib_tests_testdataservice_.testdataservice.md)*

## Properties

###  baseUrl

• **baseUrl**: *string* = "/data"

*Overrides [ODataStore](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md).[baseUrl](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#abstract-baseurl)*

*Defined in [projects/odata-observable-store/src/lib/tests/TestDataService.ts:8](https://github.com/lucasheight/odata-observable-store/blob/a92f36b7/projects/odata-observable-store/src/lib/tests/TestDataService.ts#L8)*

___

### `Protected` http

• **http**: *HttpClient*

*Overrides [ODataStore](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md).[http](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#protected-http)*

*Defined in [projects/odata-observable-store/src/lib/tests/TestDataService.ts:9](https://github.com/lucasheight/odata-observable-store/blob/a92f36b7/projects/odata-observable-store/src/lib/tests/TestDataService.ts#L9)*

___

###  notifier$

• **notifier$**: *Observable‹[IStoreNotifier](../interfaces/_projects_odata_observable_store_src_lib_istore_.istorenotifier.md)‹[ITestData](../interfaces/_projects_odata_observable_store_src_lib_tests_testdata_.itestdata.md)››* = this._notifier$.asObservable()

*Inherited from [ODataStore](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md).[notifier$](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#notifier)*

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:49](https://github.com/lucasheight/odata-observable-store/blob/a92f36b7/projects/odata-observable-store/src/lib/odata.store.ts#L49)*

Current notifier Observable state

___

###  response$

• **response$**: *Observable‹HttpResponse‹[IOdataCollection](../interfaces/_projects_odata_observable_store_src_lib_iodatacollection_.iodatacollection.md)‹[ITestData](../interfaces/_projects_odata_observable_store_src_lib_tests_testdata_.itestdata.md)›››* = this._response$.asObservable()

*Inherited from [ODataStore](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md).[response$](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#response)*

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:57](https://github.com/lucasheight/odata-observable-store/blob/a92f36b7/projects/odata-observable-store/src/lib/odata.store.ts#L57)*

Current response observable state

___

### `Protected` responseObserver$

• **responseObserver$**: *PartialObserver‹HttpResponse‹[ITestData](../interfaces/_projects_odata_observable_store_src_lib_tests_testdata_.itestdata.md) | [IOdataCollection](../interfaces/_projects_odata_observable_store_src_lib_iodatacollection_.iodatacollection.md)‹[ITestData](../interfaces/_projects_odata_observable_store_src_lib_tests_testdata_.itestdata.md)›››*

*Inherited from [ODataStore](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md).[responseObserver$](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#protected-responseobserver)*

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:61](https://github.com/lucasheight/odata-observable-store/blob/a92f36b7/projects/odata-observable-store/src/lib/odata.store.ts#L61)*

___

### `Protected` settings

• **settings**: *[StoreSettings](_projects_odata_observable_store_src_lib_storesettings_.storesettings.md)*

*Inherited from [ODataStore](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md).[settings](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#protected-settings)*

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:80](https://github.com/lucasheight/odata-observable-store/blob/a92f36b7/projects/odata-observable-store/src/lib/odata.store.ts#L80)*

IStoreSettings

___

###  state$

• **state$**: *Observable‹[IOdataCollection](../interfaces/_projects_odata_observable_store_src_lib_iodatacollection_.iodatacollection.md)‹[ITestData](../interfaces/_projects_odata_observable_store_src_lib_tests_testdata_.itestdata.md)››* = this._state$
    .asObservable()
    .pipe(
      filter((f) => typeof f === "object")
    )

*Inherited from [ODataStore](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md).[state$](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#state)*

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:39](https://github.com/lucasheight/odata-observable-store/blob/a92f36b7/projects/odata-observable-store/src/lib/odata.store.ts#L39)*

Current Observable store state

## Methods

###  complete

▸ **complete**(): *void*

*Inherited from [ODataStore](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md).[complete](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#complete)*

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:65](https://github.com/lucasheight/odata-observable-store/blob/a92f36b7/projects/odata-observable-store/src/lib/odata.store.ts#L65)*

**Returns:** *void*

___

### `Protected` dispatchNotifier

▸ **dispatchNotifier**(`act`: [action](../modules/_projects_odata_observable_store_src_lib_action_type_.md#action), `state`: [ITestData](../interfaces/_projects_odata_observable_store_src_lib_tests_testdata_.itestdata.md) | [IOdataCollection](../interfaces/_projects_odata_observable_store_src_lib_iodatacollection_.iodatacollection.md)‹[ITestData](../interfaces/_projects_odata_observable_store_src_lib_tests_testdata_.itestdata.md)›): *void*

*Inherited from [ODataStore](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md).[dispatchNotifier](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#protected-dispatchnotifier)*

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:687](https://github.com/lucasheight/odata-observable-store/blob/a92f36b7/projects/odata-observable-store/src/lib/odata.store.ts#L687)*

Dispatches the notifier$ observable

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`act` | [action](../modules/_projects_odata_observable_store_src_lib_action_type_.md#action) | - | action enum |
`state` | [ITestData](../interfaces/_projects_odata_observable_store_src_lib_tests_testdata_.itestdata.md) &#124; [IOdataCollection](../interfaces/_projects_odata_observable_store_src_lib_iodatacollection_.iodatacollection.md)‹[ITestData](../interfaces/_projects_odata_observable_store_src_lib_tests_testdata_.itestdata.md)› | null | the current state  |

**Returns:** *void*

void

___

### `Protected` dispose

▸ **dispose**(): *void*

*Inherited from [ODataStore](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md).[dispose](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#protected-dispose)*

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:669](https://github.com/lucasheight/odata-observable-store/blob/a92f36b7/projects/odata-observable-store/src/lib/odata.store.ts#L669)*

**Returns:** *void*

___

###  error

▸ **error**(): *void*

*Inherited from [ODataStore](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md).[error](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#error)*

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:67](https://github.com/lucasheight/odata-observable-store/blob/a92f36b7/projects/odata-observable-store/src/lib/odata.store.ts#L67)*

**Returns:** *void*

___

###  fill

▸ **fill**(`odata`: [IOdataCollection](../interfaces/_projects_odata_observable_store_src_lib_iodatacollection_.iodatacollection.md)‹[ITestData](../interfaces/_projects_odata_observable_store_src_lib_tests_testdata_.itestdata.md)›): *void*

*Defined in [projects/odata-observable-store/src/lib/tests/TestDataService.ts:12](https://github.com/lucasheight/odata-observable-store/blob/a92f36b7/projects/odata-observable-store/src/lib/tests/TestDataService.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`odata` | [IOdataCollection](../interfaces/_projects_odata_observable_store_src_lib_iodatacollection_.iodatacollection.md)‹[ITestData](../interfaces/_projects_odata_observable_store_src_lib_tests_testdata_.itestdata.md)› |

**Returns:** *void*

___

### `Protected` fillStore

▸ **fillStore**(`odata`: [IOdataCollection](../interfaces/_projects_odata_observable_store_src_lib_iodatacollection_.iodatacollection.md)‹[ITestData](../interfaces/_projects_odata_observable_store_src_lib_tests_testdata_.itestdata.md)›): *void*

*Inherited from [ODataStore](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md).[fillStore](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#protected-fillstore)*

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:677](https://github.com/lucasheight/odata-observable-store/blob/a92f36b7/projects/odata-observable-store/src/lib/odata.store.ts#L677)*

Fill the observable store state$ with an OData Collection

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`odata` | [IOdataCollection](../interfaces/_projects_odata_observable_store_src_lib_iodatacollection_.iodatacollection.md)‹[ITestData](../interfaces/_projects_odata_observable_store_src_lib_tests_testdata_.itestdata.md)› | IOdataCollection<T> |

**Returns:** *void*

void

___

###  get

▸ **get**‹**K**›(`value`: [ITestData](../interfaces/_projects_odata_observable_store_src_lib_tests_testdata_.itestdata.md), `keys`: K | K[], `queryString`: string): *Observable‹[ITestData](../interfaces/_projects_odata_observable_store_src_lib_tests_testdata_.itestdata.md)›*

*Inherited from [ODataStore](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md).[get](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#get)*

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:177](https://github.com/lucasheight/odata-observable-store/blob/a92f36b7/projects/odata-observable-store/src/lib/odata.store.ts#L177)*

Gets a single result of T

**`example`** get(item,"Id","$expand=Address")

**Type parameters:**

▪ **K**: *keyof ITestData*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`value` | [ITestData](../interfaces/_projects_odata_observable_store_src_lib_tests_testdata_.itestdata.md) | - | The object to located the key or keys |
`keys` | K &#124; K[] | null | The key or keys to the property(ies) that identify the primary key('s) |
`queryString` | string | null | The additional query string without the ?. This can be used to send in additional odata parameters e.g $filter, $expand $select |

**Returns:** *Observable‹[ITestData](../interfaces/_projects_odata_observable_store_src_lib_tests_testdata_.itestdata.md)›*

Observable<t>

___

###  insert

▸ **insert**(`item`: [ITestData](../interfaces/_projects_odata_observable_store_src_lib_tests_testdata_.itestdata.md), `queryString`: string): *void*

*Inherited from [ODataStore](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md).[insert](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#insert)*

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:207](https://github.com/lucasheight/odata-observable-store/blob/a92f36b7/projects/odata-observable-store/src/lib/odata.store.ts#L207)*

Posts a new item to the odata backend and appends the observable store with the new value

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`item` | [ITestData](../interfaces/_projects_odata_observable_store_src_lib_tests_testdata_.itestdata.md) | - | The object to post |
`queryString` | string | null | The additional query string without the ?. This can be used to send in additional odata parameters e.g. $filter, $expand $select |

**Returns:** *void*

void

___

###  insert$

▸ **insert$**(`item`: [ITestData](../interfaces/_projects_odata_observable_store_src_lib_tests_testdata_.itestdata.md), `queryString`: string): *Observable‹[ITestData](../interfaces/_projects_odata_observable_store_src_lib_tests_testdata_.itestdata.md)›*

*Inherited from [ODataStore](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md).[insert$](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#insert)*

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:233](https://github.com/lucasheight/odata-observable-store/blob/a92f36b7/projects/odata-observable-store/src/lib/odata.store.ts#L233)*

Posts a new item to the odata backend and appends the observable store with the new value

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`item` | [ITestData](../interfaces/_projects_odata_observable_store_src_lib_tests_testdata_.itestdata.md) | - | The object to post |
`queryString` | string | null | The additional query string without the ?. This can be used to send in additional odata parameters e.g. $filter, $expand $select |

**Returns:** *Observable‹[ITestData](../interfaces/_projects_odata_observable_store_src_lib_tests_testdata_.itestdata.md)›*

Observable<T>

___

###  patch

▸ **patch**‹**K**›(`item`: [ITestData](../interfaces/_projects_odata_observable_store_src_lib_tests_testdata_.itestdata.md), `keys`: K | K[], `queryString`: string, `method`: "patch" | "put" | "post"): *void*

*Inherited from [ODataStore](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md).[patch](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#patch)*

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:366](https://github.com/lucasheight/odata-observable-store/blob/a92f36b7/projects/odata-observable-store/src/lib/odata.store.ts#L366)*

Patches an item to the odata backend and updates the observable store with the new value

**`example`** patch(item,"Id")

**`example`** patch(item,["Id","CategoryId"], null,"post")

**Type parameters:**

▪ **K**: *keyof ITestData*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`item` | [ITestData](../interfaces/_projects_odata_observable_store_src_lib_tests_testdata_.itestdata.md) | - | The object to patch |
`keys` | K &#124; K[] | null | The key or keys to the property(ies) that identify the primary key('s) |
`queryString` | string | null | The additional query string without the ?. This can be used to send in additional odata parameters e.g. $filter, $expand $select |
`method` | "patch" &#124; "put" &#124; "post" | "patch" | The http method to use for the update. |

**Returns:** *void*

void

___

###  patch$

▸ **patch$**‹**K**›(`item`: [ITestData](../interfaces/_projects_odata_observable_store_src_lib_tests_testdata_.itestdata.md), `keys`: K | K[], `queryString`: string, `method`: "patch" | "put" | "post"): *Observable‹[ITestData](../interfaces/_projects_odata_observable_store_src_lib_tests_testdata_.itestdata.md)›*

*Inherited from [ODataStore](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md).[patch$](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#patch)*

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:423](https://github.com/lucasheight/odata-observable-store/blob/a92f36b7/projects/odata-observable-store/src/lib/odata.store.ts#L423)*

Patches an item to the odata backend and updates the observable store with the new value

**`example`** patch(item,"Id")

**`example`** patch(item,["Id","CategoryId"], null,"post")

**Type parameters:**

▪ **K**: *keyof ITestData*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`item` | [ITestData](../interfaces/_projects_odata_observable_store_src_lib_tests_testdata_.itestdata.md) | - | The object to patch |
`keys` | K &#124; K[] | null | The key or keys to the property(ies) that identify the primary key('s) |
`queryString` | string | null | The additional query string without the ?. This can be used to send in additional odata parameters e.g. $filter, $expand $select |
`method` | "patch" &#124; "put" &#124; "post" | "patch" | The http method to use for the update. |

**Returns:** *Observable‹[ITestData](../interfaces/_projects_odata_observable_store_src_lib_tests_testdata_.itestdata.md)›*

Observable<T>

___

###  query

▸ **query**(`queryString`: string): *void*

*Inherited from [ODataStore](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md).[query](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#query)*

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:101](https://github.com/lucasheight/odata-observable-store/blob/a92f36b7/projects/odata-observable-store/src/lib/odata.store.ts#L101)*

Method to hydrate the store

**`example`** query("$filter=Firstname eq 'john'&$expand=Address")

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`queryString` | string | null | The additional query string without the ?. This can be used to send in additional odata parameters e.g $filter, $expand $select |

**Returns:** *void*

void

___

###  query$

▸ **query$**(`queryString`: string): *Observable‹[IOdataCollection](../interfaces/_projects_odata_observable_store_src_lib_iodatacollection_.iodatacollection.md)‹[ITestData](../interfaces/_projects_odata_observable_store_src_lib_tests_testdata_.itestdata.md)››*

*Inherited from [ODataStore](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md).[query$](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#query)*

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:137](https://github.com/lucasheight/odata-observable-store/blob/a92f36b7/projects/odata-observable-store/src/lib/odata.store.ts#L137)*

Method to query the odata API and hydrate the store

**`example`** query("$filter=Firstname eq 'john'&$expand=Address")

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`queryString` | string | null | The additional query string without the ?. This can be used to send in additional odata parameters e.g $filter, $expand $select |

**Returns:** *Observable‹[IOdataCollection](../interfaces/_projects_odata_observable_store_src_lib_iodatacollection_.iodatacollection.md)‹[ITestData](../interfaces/_projects_odata_observable_store_src_lib_tests_testdata_.itestdata.md)››*

Observable<IOdataCollection<T>>

___

###  remove

▸ **remove**‹**K**›(`item`: [ITestData](../interfaces/_projects_odata_observable_store_src_lib_tests_testdata_.itestdata.md), `keys`: K | K[], `method`: "delete" | "post"): *void*

*Inherited from [ODataStore](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md).[remove](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#remove)*

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:478](https://github.com/lucasheight/odata-observable-store/blob/a92f36b7/projects/odata-observable-store/src/lib/odata.store.ts#L478)*

Deletes an item from the odata backend and removes item from the observable store

**`example`** delete(item,"Id")

**`example`** delete(item,["Id","CategoryId"], "post")

**Type parameters:**

▪ **K**: *keyof ITestData*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`item` | [ITestData](../interfaces/_projects_odata_observable_store_src_lib_tests_testdata_.itestdata.md) | - | The object to update |
`keys` | K &#124; K[] | null | The key or keys to the property(ies) that identify the primary key('s) |
`method` | "delete" &#124; "post" | "delete" | The http method to use for the update. |

**Returns:** *void*

void

___

###  remove$

▸ **remove$**‹**K**›(`item`: [ITestData](../interfaces/_projects_odata_observable_store_src_lib_tests_testdata_.itestdata.md), `keys`: K | K[], `method`: "delete" | "post"): *Observable‹void | Object›*

*Inherited from [ODataStore](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md).[remove$](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#remove)*

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:513](https://github.com/lucasheight/odata-observable-store/blob/a92f36b7/projects/odata-observable-store/src/lib/odata.store.ts#L513)*

Deletes an item from the odata backend and removes item from the observable store

**`example`** delete(item,"Id")

**`example`** delete(item,["Id","CategoryId"], "post")

**Type parameters:**

▪ **K**: *keyof ITestData*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`item` | [ITestData](../interfaces/_projects_odata_observable_store_src_lib_tests_testdata_.itestdata.md) | - | The object to update |
`keys` | K &#124; K[] | null | The key or keys to the property(ies) that identify the primary key('s) |
`method` | "delete" &#124; "post" | "delete" | The http method to use for the update. |

**Returns:** *Observable‹void | Object›*

Observable<void|Object>

___

###  update

▸ **update**‹**K**›(`item`: [ITestData](../interfaces/_projects_odata_observable_store_src_lib_tests_testdata_.itestdata.md), `keys`: K | K[], `queryString`: string, `method`: "put" | "post"): *void*

*Inherited from [ODataStore](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md).[update](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#update)*

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:263](https://github.com/lucasheight/odata-observable-store/blob/a92f36b7/projects/odata-observable-store/src/lib/odata.store.ts#L263)*

Updates an item to the odata backend and updates the observable store with the new value

**`example`** update(item,"Id")

**`example`** update(item,["Id","CategoryId"], null,"post")

**Type parameters:**

▪ **K**: *keyof ITestData*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`item` | [ITestData](../interfaces/_projects_odata_observable_store_src_lib_tests_testdata_.itestdata.md) | - | The object to update |
`keys` | K &#124; K[] | null | The key or keys to the property(ies) that identify the primary key('s) |
`queryString` | string | null | The additional query string without the ?. This can be used to send in additional odata parameters e.g. $filter, $expand $select |
`method` | "put" &#124; "post" | "put" | The http method to use for the update. |

**Returns:** *void*

void

___

###  update$

▸ **update$**‹**K**›(`item`: [ITestData](../interfaces/_projects_odata_observable_store_src_lib_tests_testdata_.itestdata.md), `keys`: K | K[], `queryString`: string, `method`: "put" | "post"): *Observable‹[ITestData](../interfaces/_projects_odata_observable_store_src_lib_tests_testdata_.itestdata.md)›*

*Inherited from [ODataStore](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md).[update$](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#update)*

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:314](https://github.com/lucasheight/odata-observable-store/blob/a92f36b7/projects/odata-observable-store/src/lib/odata.store.ts#L314)*

Updates an item to the odata backend and updates the observable store with the new value

**`example`** update(item,"Id")

**`example`** update(item,["Id","CategoryId"], null,"post")

**Type parameters:**

▪ **K**: *keyof ITestData*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`item` | [ITestData](../interfaces/_projects_odata_observable_store_src_lib_tests_testdata_.itestdata.md) | - | The object to update |
`keys` | K &#124; K[] | null | The key or keys to the property(ies) that identify the primary key('s) |
`queryString` | string | null | The additional query string without the ?. This can be used to send in additional odata parameters e.g. $filter, $expand $select |
`method` | "put" &#124; "post" | "put" | The http method to use for the update. |

**Returns:** *Observable‹[ITestData](../interfaces/_projects_odata_observable_store_src_lib_tests_testdata_.itestdata.md)›*

Observable<Empty> | Observable<T>

___

### `Protected` updateStore

▸ **updateStore**‹**K**›(`item`: [ITestData](../interfaces/_projects_odata_observable_store_src_lib_tests_testdata_.itestdata.md), `operation`: [action](../modules/_projects_odata_observable_store_src_lib_action_type_.md#action), `keys`: K | K[]): *void*

*Inherited from [ODataStore](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md).[updateStore](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#protected-updatestore)*

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:548](https://github.com/lucasheight/odata-observable-store/blob/a92f36b7/projects/odata-observable-store/src/lib/odata.store.ts#L548)*

Updates Observable store $state and dispatches notifier$

**`example`** updateStore(item,"update","Id");

**Type parameters:**

▪ **K**: *keyof ITestData*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`item` | [ITestData](../interfaces/_projects_odata_observable_store_src_lib_tests_testdata_.itestdata.md) | - | The item to update |
`operation` | [action](../modules/_projects_odata_observable_store_src_lib_action_type_.md#action) | - | - |
`keys` | K &#124; K[] | null | The key or keys to the property(ies) that identify the primary key('s) |

**Returns:** *void*

void

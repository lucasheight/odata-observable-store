[@lucasheight/odata-observable-store](../README.md) › [Globals](../globals.md) › ["projects/odata-observable-store/src/lib/odata.store"](../modules/_projects_odata_observable_store_src_lib_odata_store_.md) › [ODataStore](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md)

# Class: ODataStore ‹**T**›

Creates an Odata service store that follows the observable store pattern.

**`description`** Provides default odata rest methods the handle the most common odata use.
In cases where public methods are not sufficient use the protected methods, fillStore, updateStore and dispatchNotifier

## Type parameters

▪ **T**

## Hierarchy

* **ODataStore**

  ↳ [TestDataService](_projects_odata_observable_store_src_lib_tests_testdataservice_.testdataservice.md)

## Index

### Constructors

* [constructor](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#constructor)

### Properties

* [_notifier$](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#private-_notifier)
* [_response$](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#private-_response)
* [_settings](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#private-_settings)
* [_state$](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#private-_state)
* [baseUrl](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#abstract-baseurl)
* [http](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#protected-http)
* [notifier$](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#notifier)
* [response$](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#response)
* [responseObserver$](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#protected-responseobserver)
* [settings](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#protected-settings)
* [state$](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#state)
* [subs$](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#protected-readonly-subs)

### Methods

* [complete](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#complete)
* [dispatchNotifier](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#protected-dispatchnotifier)
* [dispose](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#protected-dispose)
* [error](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#error)
* [fillStore](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#protected-fillstore)
* [get](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#get)
* [insert](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#insert)
* [insert$](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#insert)
* [makeId](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#private-makeid)
* [patch](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#patch)
* [patch$](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#patch)
* [query](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#query)
* [query$](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#query)
* [remove](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#remove)
* [remove$](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#remove)
* [update](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#update)
* [update$](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#update)
* [updateStore](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#protected-updatestore)

### Object literals

* [_initState](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md#private-_initstate)

## Constructors

###  constructor

\+ **new ODataStore**(`http`: HttpClient, `settings`: [StoreSettings](_projects_odata_observable_store_src_lib_storesettings_.storesettings.md)): *[ODataStore](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md)*

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:72](https://github.com/lucasheight/odata-observable-store/blob/787a1ef7/projects/odata-observable-store/src/lib/odata.store.ts#L72)*

constructor

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`http` | HttpClient | - | HttpClient |
`settings` | [StoreSettings](_projects_odata_observable_store_src_lib_storesettings_.storesettings.md) | null | IStoreSettings  |

**Returns:** *[ODataStore](_projects_odata_observable_store_src_lib_odata_store_.odatastore.md)*

## Properties

### `Private` _notifier$

• **_notifier$**: *Subject‹[IStoreNotifier](../interfaces/_projects_odata_observable_store_src_lib_istore_.istorenotifier.md)‹T››* = new Subject()

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:46](https://github.com/lucasheight/odata-observable-store/blob/787a1ef7/projects/odata-observable-store/src/lib/odata.store.ts#L46)*

___

### `Private` _response$

• **_response$**: *Subject‹HttpResponse‹[IOdataCollection](../interfaces/_projects_odata_observable_store_src_lib_iodatacollection_.iodatacollection.md)‹T›››* = new Subject()

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:53](https://github.com/lucasheight/odata-observable-store/blob/787a1ef7/projects/odata-observable-store/src/lib/odata.store.ts#L53)*

___

### `Private` _settings

• **_settings**: *[IStoreSettings](../interfaces/_projects_odata_observable_store_src_lib_istore_.istoresettings.md)* = new StoreSettings()

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:72](https://github.com/lucasheight/odata-observable-store/blob/787a1ef7/projects/odata-observable-store/src/lib/odata.store.ts#L72)*

**`defaults:`** notifyOnDelete: true

___

### `Private` _state$

• **_state$**: *BehaviorSubject‹[IOdataCollection](../interfaces/_projects_odata_observable_store_src_lib_iodatacollection_.iodatacollection.md)‹T››* = new BehaviorSubject(
    undefined
  )

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:33](https://github.com/lucasheight/odata-observable-store/blob/787a1ef7/projects/odata-observable-store/src/lib/odata.store.ts#L33)*

___

### `Abstract` baseUrl

• **baseUrl**: *string*

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:32](https://github.com/lucasheight/odata-observable-store/blob/787a1ef7/projects/odata-observable-store/src/lib/odata.store.ts#L32)*

The base url for the odata service

___

### `Protected` http

• **http**: *HttpClient*

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:79](https://github.com/lucasheight/odata-observable-store/blob/787a1ef7/projects/odata-observable-store/src/lib/odata.store.ts#L79)*

HttpClient

___

###  notifier$

• **notifier$**: *Observable‹[IStoreNotifier](../interfaces/_projects_odata_observable_store_src_lib_istore_.istorenotifier.md)‹T››* = this._notifier$.asObservable()

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:49](https://github.com/lucasheight/odata-observable-store/blob/787a1ef7/projects/odata-observable-store/src/lib/odata.store.ts#L49)*

Current notifier Observable state

___

###  response$

• **response$**: *Observable‹HttpResponse‹[IOdataCollection](../interfaces/_projects_odata_observable_store_src_lib_iodatacollection_.iodatacollection.md)‹T›››* = this._response$.asObservable()

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:57](https://github.com/lucasheight/odata-observable-store/blob/787a1ef7/projects/odata-observable-store/src/lib/odata.store.ts#L57)*

Current response observable state

___

### `Protected` responseObserver$

• **responseObserver$**: *PartialObserver‹HttpResponse‹T | [IOdataCollection](../interfaces/_projects_odata_observable_store_src_lib_iodatacollection_.iodatacollection.md)‹T›››*

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:61](https://github.com/lucasheight/odata-observable-store/blob/787a1ef7/projects/odata-observable-store/src/lib/odata.store.ts#L61)*

___

### `Protected` settings

• **settings**: *[StoreSettings](_projects_odata_observable_store_src_lib_storesettings_.storesettings.md)*

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:80](https://github.com/lucasheight/odata-observable-store/blob/787a1ef7/projects/odata-observable-store/src/lib/odata.store.ts#L80)*

IStoreSettings

___

###  state$

• **state$**: *Observable‹[IOdataCollection](../interfaces/_projects_odata_observable_store_src_lib_iodatacollection_.iodatacollection.md)‹T››* = this._state$
    .asObservable()
    .pipe(
      filter((f) => typeof f === "object")
    )

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:39](https://github.com/lucasheight/odata-observable-store/blob/787a1ef7/projects/odata-observable-store/src/lib/odata.store.ts#L39)*

Current Observable store state

___

### `Protected` `Readonly` subs$

• **subs$**: *Subscription* = new Subscription()

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:24](https://github.com/lucasheight/odata-observable-store/blob/787a1ef7/projects/odata-observable-store/src/lib/odata.store.ts#L24)*

## Methods

###  complete

▸ **complete**(): *void*

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:65](https://github.com/lucasheight/odata-observable-store/blob/787a1ef7/projects/odata-observable-store/src/lib/odata.store.ts#L65)*

**Returns:** *void*

___

### `Protected` dispatchNotifier

▸ **dispatchNotifier**(`act`: [action](../modules/_projects_odata_observable_store_src_lib_action_type_.md#action), `state`: T | [IOdataCollection](../interfaces/_projects_odata_observable_store_src_lib_iodatacollection_.iodatacollection.md)‹T›): *void*

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:687](https://github.com/lucasheight/odata-observable-store/blob/787a1ef7/projects/odata-observable-store/src/lib/odata.store.ts#L687)*

Dispatches the notifier$ observable

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`act` | [action](../modules/_projects_odata_observable_store_src_lib_action_type_.md#action) | - | action enum |
`state` | T &#124; [IOdataCollection](../interfaces/_projects_odata_observable_store_src_lib_iodatacollection_.iodatacollection.md)‹T› | null | the current state  |

**Returns:** *void*

void

___

### `Protected` dispose

▸ **dispose**(): *void*

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:669](https://github.com/lucasheight/odata-observable-store/blob/787a1ef7/projects/odata-observable-store/src/lib/odata.store.ts#L669)*

**Returns:** *void*

___

###  error

▸ **error**(): *void*

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:67](https://github.com/lucasheight/odata-observable-store/blob/787a1ef7/projects/odata-observable-store/src/lib/odata.store.ts#L67)*

**Returns:** *void*

___

### `Protected` fillStore

▸ **fillStore**(`odata`: [IOdataCollection](../interfaces/_projects_odata_observable_store_src_lib_iodatacollection_.iodatacollection.md)‹T›): *void*

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:677](https://github.com/lucasheight/odata-observable-store/blob/787a1ef7/projects/odata-observable-store/src/lib/odata.store.ts#L677)*

Fill the observable store state$ with an OData Collection

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`odata` | [IOdataCollection](../interfaces/_projects_odata_observable_store_src_lib_iodatacollection_.iodatacollection.md)‹T› | IOdataCollection<T> |

**Returns:** *void*

void

___

###  get

▸ **get**‹**K**›(`value`: T, `keys`: K | K[], `queryString`: string): *Observable‹T›*

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:177](https://github.com/lucasheight/odata-observable-store/blob/787a1ef7/projects/odata-observable-store/src/lib/odata.store.ts#L177)*

Gets a single result of T

**`example`** get(item,"Id","$expand=Address")

**Type parameters:**

▪ **K**: *keyof T*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`value` | T | - | The object to located the key or keys |
`keys` | K &#124; K[] | null | The key or keys to the property(ies) that identify the primary key('s) |
`queryString` | string | null | The additional query string without the ?. This can be used to send in additional odata parameters e.g $filter, $expand $select |

**Returns:** *Observable‹T›*

Observable<t>

___

###  insert

▸ **insert**(`item`: T, `queryString`: string): *void*

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:207](https://github.com/lucasheight/odata-observable-store/blob/787a1ef7/projects/odata-observable-store/src/lib/odata.store.ts#L207)*

Posts a new item to the odata backend and appends the observable store with the new value

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`item` | T | - | The object to post |
`queryString` | string | null | The additional query string without the ?. This can be used to send in additional odata parameters e.g. $filter, $expand $select |

**Returns:** *void*

void

___

###  insert$

▸ **insert$**(`item`: T, `queryString`: string): *Observable‹T›*

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:233](https://github.com/lucasheight/odata-observable-store/blob/787a1ef7/projects/odata-observable-store/src/lib/odata.store.ts#L233)*

Posts a new item to the odata backend and appends the observable store with the new value

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`item` | T | - | The object to post |
`queryString` | string | null | The additional query string without the ?. This can be used to send in additional odata parameters e.g. $filter, $expand $select |

**Returns:** *Observable‹T›*

Observable<T>

___

### `Private` makeId

▸ **makeId**‹**K**›(`value`: T, `keys`: K | K[]): *string*

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:731](https://github.com/lucasheight/odata-observable-store/blob/787a1ef7/projects/odata-observable-store/src/lib/odata.store.ts#L731)*

Formats the key or keys

**Type parameters:**

▪ **K**: *keyof T*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`value` | T | T |
`keys` | K &#124; K[] | K or K[]  |

**Returns:** *string*

string

___

###  patch

▸ **patch**‹**K**›(`item`: T, `keys`: K | K[], `queryString`: string, `method`: "patch" | "put" | "post"): *void*

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:366](https://github.com/lucasheight/odata-observable-store/blob/787a1ef7/projects/odata-observable-store/src/lib/odata.store.ts#L366)*

Patches an item to the odata backend and updates the observable store with the new value

**`example`** patch(item,"Id")

**`example`** patch(item,["Id","CategoryId"], null,"post")

**Type parameters:**

▪ **K**: *keyof T*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`item` | T | - | The object to patch |
`keys` | K &#124; K[] | null | The key or keys to the property(ies) that identify the primary key('s) |
`queryString` | string | null | The additional query string without the ?. This can be used to send in additional odata parameters e.g. $filter, $expand $select |
`method` | "patch" &#124; "put" &#124; "post" | "patch" | The http method to use for the update. |

**Returns:** *void*

void

___

###  patch$

▸ **patch$**‹**K**›(`item`: T, `keys`: K | K[], `queryString`: string, `method`: "patch" | "put" | "post"): *Observable‹T›*

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:423](https://github.com/lucasheight/odata-observable-store/blob/787a1ef7/projects/odata-observable-store/src/lib/odata.store.ts#L423)*

Patches an item to the odata backend and updates the observable store with the new value

**`example`** patch(item,"Id")

**`example`** patch(item,["Id","CategoryId"], null,"post")

**Type parameters:**

▪ **K**: *keyof T*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`item` | T | - | The object to patch |
`keys` | K &#124; K[] | null | The key or keys to the property(ies) that identify the primary key('s) |
`queryString` | string | null | The additional query string without the ?. This can be used to send in additional odata parameters e.g. $filter, $expand $select |
`method` | "patch" &#124; "put" &#124; "post" | "patch" | The http method to use for the update. |

**Returns:** *Observable‹T›*

Observable<T>

___

###  query

▸ **query**(`queryString`: string): *void*

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:101](https://github.com/lucasheight/odata-observable-store/blob/787a1ef7/projects/odata-observable-store/src/lib/odata.store.ts#L101)*

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

▸ **query$**(`queryString`: string): *Observable‹[IOdataCollection](../interfaces/_projects_odata_observable_store_src_lib_iodatacollection_.iodatacollection.md)‹T››*

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:137](https://github.com/lucasheight/odata-observable-store/blob/787a1ef7/projects/odata-observable-store/src/lib/odata.store.ts#L137)*

Method to query the odata API and hydrate the store

**`example`** query("$filter=Firstname eq 'john'&$expand=Address")

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`queryString` | string | null | The additional query string without the ?. This can be used to send in additional odata parameters e.g $filter, $expand $select |

**Returns:** *Observable‹[IOdataCollection](../interfaces/_projects_odata_observable_store_src_lib_iodatacollection_.iodatacollection.md)‹T››*

Observable<IOdataCollection<T>>

___

###  remove

▸ **remove**‹**K**›(`item`: T, `keys`: K | K[], `method`: "delete" | "post"): *void*

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:478](https://github.com/lucasheight/odata-observable-store/blob/787a1ef7/projects/odata-observable-store/src/lib/odata.store.ts#L478)*

Deletes an item from the odata backend and removes item from the observable store

**`example`** delete(item,"Id")

**`example`** delete(item,["Id","CategoryId"], "post")

**Type parameters:**

▪ **K**: *keyof T*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`item` | T | - | The object to update |
`keys` | K &#124; K[] | null | The key or keys to the property(ies) that identify the primary key('s) |
`method` | "delete" &#124; "post" | "delete" | The http method to use for the update. |

**Returns:** *void*

void

___

###  remove$

▸ **remove$**‹**K**›(`item`: T, `keys`: K | K[], `method`: "delete" | "post"): *Observable‹void | Object›*

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:513](https://github.com/lucasheight/odata-observable-store/blob/787a1ef7/projects/odata-observable-store/src/lib/odata.store.ts#L513)*

Deletes an item from the odata backend and removes item from the observable store

**`example`** delete(item,"Id")

**`example`** delete(item,["Id","CategoryId"], "post")

**Type parameters:**

▪ **K**: *keyof T*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`item` | T | - | The object to update |
`keys` | K &#124; K[] | null | The key or keys to the property(ies) that identify the primary key('s) |
`method` | "delete" &#124; "post" | "delete" | The http method to use for the update. |

**Returns:** *Observable‹void | Object›*

Observable<void|Object>

___

###  update

▸ **update**‹**K**›(`item`: T, `keys`: K | K[], `queryString`: string, `method`: "put" | "post"): *void*

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:263](https://github.com/lucasheight/odata-observable-store/blob/787a1ef7/projects/odata-observable-store/src/lib/odata.store.ts#L263)*

Updates an item to the odata backend and updates the observable store with the new value

**`example`** update(item,"Id")

**`example`** update(item,["Id","CategoryId"], null,"post")

**Type parameters:**

▪ **K**: *keyof T*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`item` | T | - | The object to update |
`keys` | K &#124; K[] | null | The key or keys to the property(ies) that identify the primary key('s) |
`queryString` | string | null | The additional query string without the ?. This can be used to send in additional odata parameters e.g. $filter, $expand $select |
`method` | "put" &#124; "post" | "put" | The http method to use for the update. |

**Returns:** *void*

void

___

###  update$

▸ **update$**‹**K**›(`item`: T, `keys`: K | K[], `queryString`: string, `method`: "put" | "post"): *Observable‹T›*

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:314](https://github.com/lucasheight/odata-observable-store/blob/787a1ef7/projects/odata-observable-store/src/lib/odata.store.ts#L314)*

Updates an item to the odata backend and updates the observable store with the new value

**`example`** update(item,"Id")

**`example`** update(item,["Id","CategoryId"], null,"post")

**Type parameters:**

▪ **K**: *keyof T*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`item` | T | - | The object to update |
`keys` | K &#124; K[] | null | The key or keys to the property(ies) that identify the primary key('s) |
`queryString` | string | null | The additional query string without the ?. This can be used to send in additional odata parameters e.g. $filter, $expand $select |
`method` | "put" &#124; "post" | "put" | The http method to use for the update. |

**Returns:** *Observable‹T›*

Observable<Empty> | Observable<T>

___

### `Protected` updateStore

▸ **updateStore**‹**K**›(`item`: T, `operation`: [action](../modules/_projects_odata_observable_store_src_lib_action_type_.md#action), `keys`: K | K[]): *void*

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:548](https://github.com/lucasheight/odata-observable-store/blob/787a1ef7/projects/odata-observable-store/src/lib/odata.store.ts#L548)*

Updates Observable store $state and dispatches notifier$

**`example`** updateStore(item,"update","Id");

**Type parameters:**

▪ **K**: *keyof T*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`item` | T | - | The item to update |
`operation` | [action](../modules/_projects_odata_observable_store_src_lib_action_type_.md#action) | - | - |
`keys` | K &#124; K[] | null | The key or keys to the property(ies) that identify the primary key('s) |

**Returns:** *void*

void

## Object literals

### `Private` _initState

### ▪ **_initState**: *object*

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:25](https://github.com/lucasheight/odata-observable-store/blob/787a1ef7/projects/odata-observable-store/src/lib/odata.store.ts#L25)*

###  @odata.count

• **@odata.count**: *undefined* = undefined

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:26](https://github.com/lucasheight/odata-observable-store/blob/787a1ef7/projects/odata-observable-store/src/lib/odata.store.ts#L26)*

###  value

• **value**: *T[]* = [] as T[]

*Defined in [projects/odata-observable-store/src/lib/odata.store.ts:27](https://github.com/lucasheight/odata-observable-store/blob/787a1ef7/projects/odata-observable-store/src/lib/odata.store.ts#L27)*

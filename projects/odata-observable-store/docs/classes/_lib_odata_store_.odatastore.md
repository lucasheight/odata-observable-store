**[@lucasheight/odata-observable-store](../README.md)**

[Globals](../globals.md) › ["lib/odata.store"](../modules/_lib_odata_store_.md) › [ODataStore](_lib_odata_store_.odatastore.md)

# Class: ODataStore <**T**>

Creates an Odata service store that follows the observable store pattern.

**`description`** Provides default odata rest methods the handle the most common odata use.
In cases where public methods are not suffient use the protected methods, fillStore, updateStore and dispatchNotifier

## Type parameters

▪ **T**

## Hierarchy

* **ODataStore**

## Index

### Constructors

* [constructor](_lib_odata_store_.odatastore.md#constructor)

### Properties

* [_notifier$](_lib_odata_store_.odatastore.md#private-_notifier$)
* [_response$](_lib_odata_store_.odatastore.md#private-_response$)
* [_state$](_lib_odata_store_.odatastore.md#private-_state$)
* [baseUrl](_lib_odata_store_.odatastore.md#abstract-baseurl)
* [http](_lib_odata_store_.odatastore.md#protected-http)
* [notifier$](_lib_odata_store_.odatastore.md#notifier$)
* [response$](_lib_odata_store_.odatastore.md#response$)
* [settings](_lib_odata_store_.odatastore.md#protected-settings)
* [state$](_lib_odata_store_.odatastore.md#state$)

### Methods

* [dispatchNotifier](_lib_odata_store_.odatastore.md#protected-dispatchnotifier)
* [fillStore](_lib_odata_store_.odatastore.md#protected-fillstore)
* [get](_lib_odata_store_.odatastore.md#get)
* [insert](_lib_odata_store_.odatastore.md#insert)
* [patch](_lib_odata_store_.odatastore.md#patch)
* [query](_lib_odata_store_.odatastore.md#query)
* [quoteKey](_lib_odata_store_.odatastore.md#private-quotekey)
* [remove](_lib_odata_store_.odatastore.md#remove)
* [update](_lib_odata_store_.odatastore.md#update)
* [updateStore](_lib_odata_store_.odatastore.md#protected-updatestore)

### Object literals

* [_initState](_lib_odata_store_.odatastore.md#private-_initstate)
* [_settings](_lib_odata_store_.odatastore.md#private-_settings)

## Constructors

###  constructor

\+ **new ODataStore**(`http`: HttpClient, `settings`: [IStoreSettings](../interfaces/_lib_istore_.istoresettings.md)): *[ODataStore](_lib_odata_store_.odatastore.md)*

*Defined in [lib/odata.store.ts:40](https://github.com/lucasheight/odata-observable-store/blob/5598b34d/projects/odata-observable-store/src/lib/odata.store.ts#L40)*

constructor

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`http` | HttpClient | - | HttpClient |
`settings` | [IStoreSettings](../interfaces/_lib_istore_.istoresettings.md) |  null | IStoreSettings  |

**Returns:** *[ODataStore](_lib_odata_store_.odatastore.md)*

## Properties

### `Private` _notifier$

• **_notifier$**: *Subject‹[IStoreNotifier](../interfaces/_lib_istore_.istorenotifier.md)‹T››* =  new Subject()

*Defined in [lib/odata.store.ts:26](https://github.com/lucasheight/odata-observable-store/blob/5598b34d/projects/odata-observable-store/src/lib/odata.store.ts#L26)*

___

### `Private` _response$

• **_response$**: *Subject‹HttpResponse‹[IOdataCollection](../interfaces/_lib_iodatacollection_.iodatacollection.md)‹T›››* =  new Subject()

*Defined in [lib/odata.store.ts:30](https://github.com/lucasheight/odata-observable-store/blob/5598b34d/projects/odata-observable-store/src/lib/odata.store.ts#L30)*

___

### `Private` _state$

• **_state$**: *BehaviorSubject‹[IOdataCollection](../interfaces/_lib_iodatacollection_.iodatacollection.md)‹T››* =  new BehaviorSubject(undefined)

*Defined in [lib/odata.store.ts:21](https://github.com/lucasheight/odata-observable-store/blob/5598b34d/projects/odata-observable-store/src/lib/odata.store.ts#L21)*

___

### `Abstract` baseUrl

• **baseUrl**: *string*

*Defined in [lib/odata.store.ts:20](https://github.com/lucasheight/odata-observable-store/blob/5598b34d/projects/odata-observable-store/src/lib/odata.store.ts#L20)*

The base url for the odata service

___

### `Protected` http

• **http**: *HttpClient*

*Defined in [lib/odata.store.ts:46](https://github.com/lucasheight/odata-observable-store/blob/5598b34d/projects/odata-observable-store/src/lib/odata.store.ts#L46)*

HttpClient

___

###  notifier$

• **notifier$**: *Observable‹[IStoreNotifier](../interfaces/_lib_istore_.istorenotifier.md)‹T››* =  this._notifier$.asObservable()

*Defined in [lib/odata.store.ts:29](https://github.com/lucasheight/odata-observable-store/blob/5598b34d/projects/odata-observable-store/src/lib/odata.store.ts#L29)*

Current notifier Observable state

___

###  response$

• **response$**: *Observable‹HttpResponse‹[IOdataCollection](../interfaces/_lib_iodatacollection_.iodatacollection.md)‹T›››* =  this._response$.asObservable()

*Defined in [lib/odata.store.ts:32](https://github.com/lucasheight/odata-observable-store/blob/5598b34d/projects/odata-observable-store/src/lib/odata.store.ts#L32)*

Current response observable state

___

### `Protected` settings

• **settings**: *[IStoreSettings](../interfaces/_lib_istore_.istoresettings.md)*

*Defined in [lib/odata.store.ts:46](https://github.com/lucasheight/odata-observable-store/blob/5598b34d/projects/odata-observable-store/src/lib/odata.store.ts#L46)*

IStoreSettings

___

###  state$

• **state$**: *Observable‹[IOdataCollection](../interfaces/_lib_iodatacollection_.iodatacollection.md)‹T››* =  this._state$.asObservable().pipe(filter(f => typeof f === "object"))

*Defined in [lib/odata.store.ts:25](https://github.com/lucasheight/odata-observable-store/blob/5598b34d/projects/odata-observable-store/src/lib/odata.store.ts#L25)*

Current Observable store state

## Methods

### `Protected` dispatchNotifier

▸ **dispatchNotifier**(`act`: [action](../enums/_lib_action_enum_.action.md), `state`: T): *void*

*Defined in [lib/odata.store.ts:347](https://github.com/lucasheight/odata-observable-store/blob/5598b34d/projects/odata-observable-store/src/lib/odata.store.ts#L347)*

Dispatches the notifier$ observable

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`act` | [action](../enums/_lib_action_enum_.action.md) | - | action enum |
`state` | T |  null | the current state  |

**Returns:** *void*

void

___

### `Protected` fillStore

▸ **fillStore**(`odata`: [IOdataCollection](../interfaces/_lib_iodatacollection_.iodatacollection.md)‹T›): *void*

*Defined in [lib/odata.store.ts:337](https://github.com/lucasheight/odata-observable-store/blob/5598b34d/projects/odata-observable-store/src/lib/odata.store.ts#L337)*

Fill the observable store state$ with an OData Collection

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`odata` | [IOdataCollection](../interfaces/_lib_iodatacollection_.iodatacollection.md)‹T› | IOdataCollection<T> |

**Returns:** *void*

void

___

###  get

▸ **get**<**K**>(`value`: T, `keys`: K | K[], `queryString`: string): *Observable‹T›*

*Defined in [lib/odata.store.ts:91](https://github.com/lucasheight/odata-observable-store/blob/5598b34d/projects/odata-observable-store/src/lib/odata.store.ts#L91)*

Gets a single result of T

**Type parameters:**

▪ **K**: *keyof T*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`value` | T | - | The object to located the key or keys |
`keys` | K \| K[] |  null | The key or keys to the property(ies) that identify the primary key('s) |
`queryString` | string |  null | The additional query string without the ?. This can be used to send in addtional odata parameters e.g $filter, $expand $select |

**Returns:** *Observable‹T›*

Observable<t>

___

###  insert

▸ **insert**(`item`: T, `queryString`: string): *void*

*Defined in [lib/odata.store.ts:114](https://github.com/lucasheight/odata-observable-store/blob/5598b34d/projects/odata-observable-store/src/lib/odata.store.ts#L114)*

Posts a new item to the odata backend and appends the observable store with the new value

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`item` | T | - | The object to post |
`queryString` | string |  null | The additional query string without the ?. This can be used to send in addtional odata parameters e.g. $filter, $expand $select |

**Returns:** *void*

void

___

###  patch

▸ **patch**<**K**>(`item`: T, `keys`: K | K[], `queryString`: string, `method`: "patch" | "put" | "post"): *void*

*Defined in [lib/odata.store.ts:175](https://github.com/lucasheight/odata-observable-store/blob/5598b34d/projects/odata-observable-store/src/lib/odata.store.ts#L175)*

Patches an item to the odata backend and updates the observable store with the new value

**Type parameters:**

▪ **K**: *keyof T*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`item` | T | - | The object to patch |
`keys` | K \| K[] |  null | The key or keys to the property(ies) that identify the primary key('s) |
`queryString` | string |  null | The additional query string without the ?. This can be used to send in addtional odata parameters e.g. $filter, $expand $select |
`method` | "patch" \| "put" \| "post" | "patch" | The http method to use for the update. |

**Returns:** *void*

void

___

###  query

▸ **query**(`queryString`: string): *void*

*Defined in [lib/odata.store.ts:59](https://github.com/lucasheight/odata-observable-store/blob/5598b34d/projects/odata-observable-store/src/lib/odata.store.ts#L59)*

Method to return an OData collection

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`queryString` | string |  null | The additional query string without the ?. This can be used to send in addtional odata parameters e.g $filter, $expand $select |

**Returns:** *void*

void

___

### `Private` quoteKey

▸ **quoteKey**(`id`: any): *string*

*Defined in [lib/odata.store.ts:386](https://github.com/lucasheight/odata-observable-store/blob/5598b34d/projects/odata-observable-store/src/lib/odata.store.ts#L386)*

Determines if string key should be single quoted .

**Parameters:**

Name | Type |
------ | ------ |
`id` | any |

**Returns:** *string*

___

###  remove

▸ **remove**<**K**>(`item`: T, `keys`: K | K[], `method`: "delete" | "post"): *void*

*Defined in [lib/odata.store.ts:215](https://github.com/lucasheight/odata-observable-store/blob/5598b34d/projects/odata-observable-store/src/lib/odata.store.ts#L215)*

Deletes an item from the odata backend and removes item from the observable store

**Type parameters:**

▪ **K**: *keyof T*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`item` | T | - | The object to update |
`keys` | K \| K[] |  null | The key or keys to the property(ies) that identify the primary key('s) |
`method` | "delete" \| "post" | "delete" | The http method to use for the update. |

**Returns:** *void*

void

___

###  update

▸ **update**<**K**>(`item`: T, `keys`: K | K[], `queryString`: string, `method`: "put" | "post"): *void*

*Defined in [lib/odata.store.ts:134](https://github.com/lucasheight/odata-observable-store/blob/5598b34d/projects/odata-observable-store/src/lib/odata.store.ts#L134)*

Updates an item to the odata backend and updates the observable store with the new value

**Type parameters:**

▪ **K**: *keyof T*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`item` | T | - | The object to update |
`keys` | K \| K[] |  null | The key or keys to the property(ies) that identify the primary key('s) |
`queryString` | string |  null | The additional query string without the ?. This can be used to send in addtional odata parameters e.g. $filter, $expand $select |
`method` | "put" \| "post" | "put" | The http method to use for the update. |

**Returns:** *void*

void

___

### `Protected` updateStore

▸ **updateStore**<**K**>(`item`: T, `operation`: "insert" | "update" | "delete", `keys`: K | K[]): *void*

*Defined in [lib/odata.store.ts:242](https://github.com/lucasheight/odata-observable-store/blob/5598b34d/projects/odata-observable-store/src/lib/odata.store.ts#L242)*

Updates Observable store $state and dispatches notifier$

**Type parameters:**

▪ **K**: *keyof T*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`item` | T | - | The item to update |
`operation` | "insert" \| "update" \| "delete" | - | - |
`keys` | K \| K[] |  null | The key or keys to the property(ies) that identify the primary key('s) |

**Returns:** *void*

void

## Object literals

### `Private` _initState

### ▪ **_initState**: *object*

*Defined in [lib/odata.store.ts:16](https://github.com/lucasheight/odata-observable-store/blob/5598b34d/projects/odata-observable-store/src/lib/odata.store.ts#L16)*

###  @odata.count

• **@odata.count**: *undefined* =  undefined

*Defined in [lib/odata.store.ts:16](https://github.com/lucasheight/odata-observable-store/blob/5598b34d/projects/odata-observable-store/src/lib/odata.store.ts#L16)*

###  value

• **value**: *T[]* =  <T[]>[]

*Defined in [lib/odata.store.ts:16](https://github.com/lucasheight/odata-observable-store/blob/5598b34d/projects/odata-observable-store/src/lib/odata.store.ts#L16)*

___

### `Private` _settings

### ▪ **_settings**: *object*

*Defined in [lib/odata.store.ts:33](https://github.com/lucasheight/odata-observable-store/blob/5598b34d/projects/odata-observable-store/src/lib/odata.store.ts#L33)*

###  notifyOnDelete

• **notifyOnDelete**: *true* = true

*Defined in [lib/odata.store.ts:35](https://github.com/lucasheight/odata-observable-store/blob/5598b34d/projects/odata-observable-store/src/lib/odata.store.ts#L35)*

###  notifyOnGet

• **notifyOnGet**: *false* = false

*Defined in [lib/odata.store.ts:36](https://github.com/lucasheight/odata-observable-store/blob/5598b34d/projects/odata-observable-store/src/lib/odata.store.ts#L36)*

###  notifyOnInsert

• **notifyOnInsert**: *true* = true

*Defined in [lib/odata.store.ts:37](https://github.com/lucasheight/odata-observable-store/blob/5598b34d/projects/odata-observable-store/src/lib/odata.store.ts#L37)*

###  notifyOnUpdate

• **notifyOnUpdate**: *true* = true

*Defined in [lib/odata.store.ts:38](https://github.com/lucasheight/odata-observable-store/blob/5598b34d/projects/odata-observable-store/src/lib/odata.store.ts#L38)*

###  use$countOnQuery

• **use$countOnQuery**: *true* = true

*Defined in [lib/odata.store.ts:39](https://github.com/lucasheight/odata-observable-store/blob/5598b34d/projects/odata-observable-store/src/lib/odata.store.ts#L39)*
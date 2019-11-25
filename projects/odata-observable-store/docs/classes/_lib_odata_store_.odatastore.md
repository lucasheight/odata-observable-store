[@lucasheight/odata-observable-store](../README.md) › [Globals](../globals.md) › ["lib/odata.store"](../modules/_lib_odata_store_.md) › [ODataStore](_lib_odata_store_.odatastore.md)

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
* [responseObserver$](_lib_odata_store_.odatastore.md#protected-responseobserver$)
* [settings](_lib_odata_store_.odatastore.md#protected-settings)
* [state$](_lib_odata_store_.odatastore.md#state$)

### Methods

* [complete](_lib_odata_store_.odatastore.md#complete)
* [dispatchNotifier](_lib_odata_store_.odatastore.md#protected-dispatchnotifier)
* [error](_lib_odata_store_.odatastore.md#error)
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

*Defined in [lib/odata.store.ts:69](https://github.com/lucasheight/odata-observable-store/blob/e88d55f9/projects/odata-observable-store/src/lib/odata.store.ts#L69)*

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

*Defined in [lib/odata.store.ts:36](https://github.com/lucasheight/odata-observable-store/blob/e88d55f9/projects/odata-observable-store/src/lib/odata.store.ts#L36)*

___

### `Private` _response$

• **_response$**: *Subject‹HttpResponse‹[IOdataCollection](../interfaces/_lib_iodatacollection_.iodatacollection.md)‹T›››* =  new Subject()

*Defined in [lib/odata.store.ts:43](https://github.com/lucasheight/odata-observable-store/blob/e88d55f9/projects/odata-observable-store/src/lib/odata.store.ts#L43)*

___

### `Private` _state$

• **_state$**: *BehaviorSubject‹[IOdataCollection](../interfaces/_lib_iodatacollection_.iodatacollection.md)‹T››* =  new BehaviorSubject(
    undefined
  )

*Defined in [lib/odata.store.ts:23](https://github.com/lucasheight/odata-observable-store/blob/e88d55f9/projects/odata-observable-store/src/lib/odata.store.ts#L23)*

___

### `Abstract` baseUrl

• **baseUrl**: *string*

*Defined in [lib/odata.store.ts:22](https://github.com/lucasheight/odata-observable-store/blob/e88d55f9/projects/odata-observable-store/src/lib/odata.store.ts#L22)*

The base url for the odata service

___

### `Protected` http

• **http**: *HttpClient*

*Defined in [lib/odata.store.ts:76](https://github.com/lucasheight/odata-observable-store/blob/e88d55f9/projects/odata-observable-store/src/lib/odata.store.ts#L76)*

HttpClient

___

###  notifier$

• **notifier$**: *Observable‹[IStoreNotifier](../interfaces/_lib_istore_.istorenotifier.md)‹T››* =  this._notifier$.asObservable()

*Defined in [lib/odata.store.ts:39](https://github.com/lucasheight/odata-observable-store/blob/e88d55f9/projects/odata-observable-store/src/lib/odata.store.ts#L39)*

Current notifier Observable state

___

###  response$

• **response$**: *Observable‹HttpResponse‹[IOdataCollection](../interfaces/_lib_iodatacollection_.iodatacollection.md)‹T›››* =  this._response$.asObservable()

*Defined in [lib/odata.store.ts:47](https://github.com/lucasheight/odata-observable-store/blob/e88d55f9/projects/odata-observable-store/src/lib/odata.store.ts#L47)*

Current response observable state

___

### `Protected` responseObserver$

• **responseObserver$**: *PartialObserver‹HttpResponse‹T | [IOdataCollection](../interfaces/_lib_iodatacollection_.iodatacollection.md)‹T›››*

*Defined in [lib/odata.store.ts:51](https://github.com/lucasheight/odata-observable-store/blob/e88d55f9/projects/odata-observable-store/src/lib/odata.store.ts#L51)*

___

### `Protected` settings

• **settings**: *[IStoreSettings](../interfaces/_lib_istore_.istoresettings.md)*

*Defined in [lib/odata.store.ts:77](https://github.com/lucasheight/odata-observable-store/blob/e88d55f9/projects/odata-observable-store/src/lib/odata.store.ts#L77)*

IStoreSettings

___

###  state$

• **state$**: *Observable‹[IOdataCollection](../interfaces/_lib_iodatacollection_.iodatacollection.md)‹T››* =  this._state$
    .asObservable()
    .pipe(
      filter(f => typeof f === "object")
    )

*Defined in [lib/odata.store.ts:29](https://github.com/lucasheight/odata-observable-store/blob/e88d55f9/projects/odata-observable-store/src/lib/odata.store.ts#L29)*

Current Observable store state

## Methods

###  complete

▸ **complete**(): *void*

*Defined in [lib/odata.store.ts:54](https://github.com/lucasheight/odata-observable-store/blob/e88d55f9/projects/odata-observable-store/src/lib/odata.store.ts#L54)*

**Returns:** *void*

___

### `Protected` dispatchNotifier

▸ **dispatchNotifier**(`act`: [action](../modules/_lib_action_type_.md#action), `state`: T): *void*

*Defined in [lib/odata.store.ts:458](https://github.com/lucasheight/odata-observable-store/blob/e88d55f9/projects/odata-observable-store/src/lib/odata.store.ts#L458)*

Dispatches the notifier$ observable

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`act` | [action](../modules/_lib_action_type_.md#action) | - | action enum |
`state` | T |  null | the current state  |

**Returns:** *void*

void

___

###  error

▸ **error**(): *void*

*Defined in [lib/odata.store.ts:55](https://github.com/lucasheight/odata-observable-store/blob/e88d55f9/projects/odata-observable-store/src/lib/odata.store.ts#L55)*

**Returns:** *void*

___

### `Protected` fillStore

▸ **fillStore**(`odata`: [IOdataCollection](../interfaces/_lib_iodatacollection_.iodatacollection.md)‹T›): *void*

*Defined in [lib/odata.store.ts:448](https://github.com/lucasheight/odata-observable-store/blob/e88d55f9/projects/odata-observable-store/src/lib/odata.store.ts#L448)*

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

*Defined in [lib/odata.store.ts:138](https://github.com/lucasheight/odata-observable-store/blob/e88d55f9/projects/odata-observable-store/src/lib/odata.store.ts#L138)*

Gets a single result of T

**Type parameters:**

▪ **K**: *keyof T*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`value` | T | - | The object to located the key or keys |
`keys` | K &#124; K[] |  null | The key or keys to the property(ies) that identify the primary key('s) |
`queryString` | string |  null | The additional query string without the ?. This can be used to send in addtional odata parameters e.g $filter, $expand $select |

**Returns:** *Observable‹T›*

Observable<t>

___

###  insert

▸ **insert**(`item`: T, `queryString`: string): *void*

*Defined in [lib/odata.store.ts:175](https://github.com/lucasheight/odata-observable-store/blob/e88d55f9/projects/odata-observable-store/src/lib/odata.store.ts#L175)*

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

*Defined in [lib/odata.store.ts:252](https://github.com/lucasheight/odata-observable-store/blob/e88d55f9/projects/odata-observable-store/src/lib/odata.store.ts#L252)*

Patches an item to the odata backend and updates the observable store with the new value

**Type parameters:**

▪ **K**: *keyof T*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`item` | T | - | The object to patch |
`keys` | K &#124; K[] |  null | The key or keys to the property(ies) that identify the primary key('s) |
`queryString` | string |  null | The additional query string without the ?. This can be used to send in addtional odata parameters e.g. $filter, $expand $select |
`method` | "patch" &#124; "put" &#124; "post" | "patch" | The http method to use for the update. |

**Returns:** *void*

void

___

###  query

▸ **query**(`queryString`: string): *void*

*Defined in [lib/odata.store.ts:98](https://github.com/lucasheight/odata-observable-store/blob/e88d55f9/projects/odata-observable-store/src/lib/odata.store.ts#L98)*

Method to return an OData collection

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`queryString` | string |  null | The additional query string without the ?. This can be used to send in addtional odata parameters e.g $filter, $expand $select |

**Returns:** *void*

void

___

### `Private` quoteKey

▸ **quoteKey**(`id`: string | number): *string*

*Defined in [lib/odata.store.ts:498](https://github.com/lucasheight/odata-observable-store/blob/e88d55f9/projects/odata-observable-store/src/lib/odata.store.ts#L498)*

Determines if string key should be single quoted .

**Parameters:**

Name | Type |
------ | ------ |
`id` | string &#124; number |

**Returns:** *string*

___

###  remove

▸ **remove**<**K**>(`item`: T, `keys`: K | K[], `method`: "delete" | "post"): *void*

*Defined in [lib/odata.store.ts:302](https://github.com/lucasheight/odata-observable-store/blob/e88d55f9/projects/odata-observable-store/src/lib/odata.store.ts#L302)*

Deletes an item from the odata backend and removes item from the observable store

**Type parameters:**

▪ **K**: *keyof T*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`item` | T | - | The object to update |
`keys` | K &#124; K[] |  null | The key or keys to the property(ies) that identify the primary key('s) |
`method` | "delete" &#124; "post" | "delete" | The http method to use for the update. |

**Returns:** *void*

void

___

###  update

▸ **update**<**K**>(`item`: T, `keys`: K | K[], `queryString`: string, `method`: "put" | "post"): *void*

*Defined in [lib/odata.store.ts:202](https://github.com/lucasheight/odata-observable-store/blob/e88d55f9/projects/odata-observable-store/src/lib/odata.store.ts#L202)*

Updates an item to the odata backend and updates the observable store with the new value

**Type parameters:**

▪ **K**: *keyof T*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`item` | T | - | The object to update |
`keys` | K &#124; K[] |  null | The key or keys to the property(ies) that identify the primary key('s) |
`queryString` | string |  null | The additional query string without the ?. This can be used to send in addtional odata parameters e.g. $filter, $expand $select |
`method` | "put" &#124; "post" | "put" | The http method to use for the update. |

**Returns:** *void*

void

___

### `Protected` updateStore

▸ **updateStore**<**K**>(`item`: T, `operation`: [action](../modules/_lib_action_type_.md#action), `keys`: K | K[]): *void*

*Defined in [lib/odata.store.ts:337](https://github.com/lucasheight/odata-observable-store/blob/e88d55f9/projects/odata-observable-store/src/lib/odata.store.ts#L337)*

Updates Observable store $state and dispatches notifier$

**Type parameters:**

▪ **K**: *keyof T*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`item` | T | - | The item to update |
`operation` | [action](../modules/_lib_action_type_.md#action) | - | - |
`keys` | K &#124; K[] |  null | The key or keys to the property(ies) that identify the primary key('s) |

**Returns:** *void*

void

## Object literals

### `Private` _initState

### ▪ **_initState**: *object*

*Defined in [lib/odata.store.ts:15](https://github.com/lucasheight/odata-observable-store/blob/e88d55f9/projects/odata-observable-store/src/lib/odata.store.ts#L15)*

###  @odata.count

• **@odata.count**: *undefined* =  undefined

*Defined in [lib/odata.store.ts:16](https://github.com/lucasheight/odata-observable-store/blob/e88d55f9/projects/odata-observable-store/src/lib/odata.store.ts#L16)*

###  value

• **value**: *T[]* =  [] as T[]

*Defined in [lib/odata.store.ts:17](https://github.com/lucasheight/odata-observable-store/blob/e88d55f9/projects/odata-observable-store/src/lib/odata.store.ts#L17)*

___

### `Private` _settings

### ▪ **_settings**: *object*

*Defined in [lib/odata.store.ts:62](https://github.com/lucasheight/odata-observable-store/blob/e88d55f9/projects/odata-observable-store/src/lib/odata.store.ts#L62)*

###  notifyOnDelete

• **notifyOnDelete**: *true* = true

*Defined in [lib/odata.store.ts:64](https://github.com/lucasheight/odata-observable-store/blob/e88d55f9/projects/odata-observable-store/src/lib/odata.store.ts#L64)*

###  notifyOnGet

• **notifyOnGet**: *false* = false

*Defined in [lib/odata.store.ts:65](https://github.com/lucasheight/odata-observable-store/blob/e88d55f9/projects/odata-observable-store/src/lib/odata.store.ts#L65)*

###  notifyOnInsert

• **notifyOnInsert**: *true* = true

*Defined in [lib/odata.store.ts:66](https://github.com/lucasheight/odata-observable-store/blob/e88d55f9/projects/odata-observable-store/src/lib/odata.store.ts#L66)*

###  notifyOnUpdate

• **notifyOnUpdate**: *true* = true

*Defined in [lib/odata.store.ts:67](https://github.com/lucasheight/odata-observable-store/blob/e88d55f9/projects/odata-observable-store/src/lib/odata.store.ts#L67)*

###  use$countOnQuery

• **use$countOnQuery**: *true* = true

*Defined in [lib/odata.store.ts:68](https://github.com/lucasheight/odata-observable-store/blob/e88d55f9/projects/odata-observable-store/src/lib/odata.store.ts#L68)*

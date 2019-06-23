[@lucasheight/odata-observable-store](../README.md) > ["odata.store"](../modules/_odata_store_.md) > [ODataStore](../classes/_odata_store_.odatastore.md)

# Class: ODataStore

Creates an Odata service store that follows the observable store pattern.

*__description__*: Provides default odata rest methods the handle the most common odata use. In cases where public methods are not suffient use the protected methods, fillStore, updateStore and dispatchNotifier

## Type parameters
#### T 
## Hierarchy

**ODataStore**

## Index

### Constructors

* [constructor](_odata_store_.odatastore.md#constructor)

### Properties

* [_notifier$](_odata_store_.odatastore.md#_notifier_)
* [_response$](_odata_store_.odatastore.md#_response_)
* [_state$](_odata_store_.odatastore.md#_state_)
* [baseUrl](_odata_store_.odatastore.md#baseurl)
* [http](_odata_store_.odatastore.md#http)
* [notifier$](_odata_store_.odatastore.md#notifier_)
* [response$](_odata_store_.odatastore.md#response_)
* [settings](_odata_store_.odatastore.md#settings)
* [state$](_odata_store_.odatastore.md#state_)

### Methods

* [dispatchNotifier](_odata_store_.odatastore.md#dispatchnotifier)
* [fillStore](_odata_store_.odatastore.md#fillstore)
* [get](_odata_store_.odatastore.md#get)
* [insert](_odata_store_.odatastore.md#insert)
* [patch](_odata_store_.odatastore.md#patch)
* [query](_odata_store_.odatastore.md#query)
* [quoteKey](_odata_store_.odatastore.md#quotekey)
* [remove](_odata_store_.odatastore.md#remove)
* [update](_odata_store_.odatastore.md#update)
* [updateStore](_odata_store_.odatastore.md#updatestore)

### Object literals

* [_initState](_odata_store_.odatastore.md#_initstate)
* [_settings](_odata_store_.odatastore.md#_settings)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ODataStore**(http: *`HttpClient`*, settings?: *[IStoreSettings](../interfaces/_istore_.istoresettings.md)*): [ODataStore](_odata_store_.odatastore.md)

*Defined in [odata.store.ts:39](https://github.com/lucasheight/odata-observable-store/blob/51c3dfe/src/odata.store.ts#L39)*

constructor

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| http | `HttpClient` | - |  HttpClient |
| `Default value` settings | [IStoreSettings](../interfaces/_istore_.istoresettings.md) |  null |  IStoreSettings |

**Returns:** [ODataStore](_odata_store_.odatastore.md)

___

## Properties

<a id="_notifier_"></a>

### `<Private>` _notifier$

**● _notifier$**: *`Subject`<[IStoreNotifier](../interfaces/_istore_.istorenotifier.md)<`T`>>* =  new Subject()

*Defined in [odata.store.ts:26](https://github.com/lucasheight/odata-observable-store/blob/51c3dfe/src/odata.store.ts#L26)*

___
<a id="_response_"></a>

### `<Private>` _response$

**● _response$**: *`Subject`<`HttpResponse`<[IOdataCollection](../interfaces/_iodatacollection_.iodatacollection.md)<`T`>>>* =  new Subject()

*Defined in [odata.store.ts:30](https://github.com/lucasheight/odata-observable-store/blob/51c3dfe/src/odata.store.ts#L30)*

___
<a id="_state_"></a>

### `<Private>` _state$

**● _state$**: *`BehaviorSubject`<[IOdataCollection](../interfaces/_iodatacollection_.iodatacollection.md)<`T`>>* =  new BehaviorSubject(undefined)

*Defined in [odata.store.ts:21](https://github.com/lucasheight/odata-observable-store/blob/51c3dfe/src/odata.store.ts#L21)*

___
<a id="baseurl"></a>

### `<Abstract>` baseUrl

**● baseUrl**: *`string`*

*Defined in [odata.store.ts:20](https://github.com/lucasheight/odata-observable-store/blob/51c3dfe/src/odata.store.ts#L20)*

The base url for the odata service

___
<a id="http"></a>

### `<Protected>` http

**● http**: *`HttpClient`*

*Defined in [odata.store.ts:45](https://github.com/lucasheight/odata-observable-store/blob/51c3dfe/src/odata.store.ts#L45)*

HttpClient

___
<a id="notifier_"></a>

###  notifier$

**● notifier$**: *`Observable`<[IStoreNotifier](../interfaces/_istore_.istorenotifier.md)<`T`>>* =  this._notifier$.asObservable()

*Defined in [odata.store.ts:29](https://github.com/lucasheight/odata-observable-store/blob/51c3dfe/src/odata.store.ts#L29)*

Current notifier Observable state

___
<a id="response_"></a>

###  response$

**● response$**: *`Observable`<`HttpResponse`<[IOdataCollection](../interfaces/_iodatacollection_.iodatacollection.md)<`T`>>>* =  this._response$.asObservable()

*Defined in [odata.store.ts:32](https://github.com/lucasheight/odata-observable-store/blob/51c3dfe/src/odata.store.ts#L32)*

Current response observable state

___
<a id="settings"></a>

### `<Protected>` settings

**● settings**: *[IStoreSettings](../interfaces/_istore_.istoresettings.md)*

*Defined in [odata.store.ts:45](https://github.com/lucasheight/odata-observable-store/blob/51c3dfe/src/odata.store.ts#L45)*

IStoreSettings

___
<a id="state_"></a>

###  state$

**● state$**: *`Observable`<[IOdataCollection](../interfaces/_iodatacollection_.iodatacollection.md)<`T`>>* =  this._state$.asObservable().pipe(filter(f => typeof f === "object"))

*Defined in [odata.store.ts:25](https://github.com/lucasheight/odata-observable-store/blob/51c3dfe/src/odata.store.ts#L25)*

Current Observable store state

___

## Methods

<a id="dispatchnotifier"></a>

### `<Protected>` dispatchNotifier

▸ **dispatchNotifier**(act: *[action](../enums/_action_enum_.action.md)*, state?: *`T`*): `void`

*Defined in [odata.store.ts:310](https://github.com/lucasheight/odata-observable-store/blob/51c3dfe/src/odata.store.ts#L310)*

Dispatches the notifier$ observable

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| act | [action](../enums/_action_enum_.action.md) | - |  action enum |
| `Default value` state | `T` |  null |  the current state |

**Returns:** `void`
void

___
<a id="fillstore"></a>

### `<Protected>` fillStore

▸ **fillStore**(odata: *[IOdataCollection](../interfaces/_iodatacollection_.iodatacollection.md)<`T`>*): `void`

*Defined in [odata.store.ts:300](https://github.com/lucasheight/odata-observable-store/blob/51c3dfe/src/odata.store.ts#L300)*

Fill the observable store state$ with an OData Collection

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| odata | [IOdataCollection](../interfaces/_iodatacollection_.iodatacollection.md)<`T`> |  IOdataCollection<T> |

**Returns:** `void`
void

___
<a id="get"></a>

###  get

▸ **get**<`K`>(value: *`T`*, keys?: *`K` \| `K`[]*, queryString?: *`string`*): `Observable`<`T`>

*Defined in [odata.store.ts:87](https://github.com/lucasheight/odata-observable-store/blob/51c3dfe/src/odata.store.ts#L87)*

Gets a single result of T

**Type parameters:**

#### K :  `keyof T`
**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| value | `T` | - |  The object to located the key or keys |
| `Default value` keys | `K` \| `K`[] |  null |  The key or keys to the property(ies) that identify the primary key('s) |
| `Default value` queryString | `string` |  null |  The additional query string without the ?. This can be used to send in addtional odata parameters e.g $filter, $expand $select |

**Returns:** `Observable`<`T`>
Observable

___
<a id="insert"></a>

###  insert

▸ **insert**(item: *`T`*, queryString?: *`string`*): `void`

*Defined in [odata.store.ts:110](https://github.com/lucasheight/odata-observable-store/blob/51c3dfe/src/odata.store.ts#L110)*

Posts a new item to the odata backend and appends the observable store with the new value

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| item | `T` | - |  The object to post |
| `Default value` queryString | `string` |  null |  The additional query string without the ?. This can be used to send in addtional odata parameters e.g. $filter, $expand $select |

**Returns:** `void`
void

___
<a id="patch"></a>

###  patch

▸ **patch**<`K`>(item: *`T`*, keys?: *`K` \| `K`[]*, queryString?: *`string`*, method?: *"patch" \| "put" \| "post"*): `void`

*Defined in [odata.store.ts:171](https://github.com/lucasheight/odata-observable-store/blob/51c3dfe/src/odata.store.ts#L171)*

Patches an item to the odata backend and updates the observable store with the new value

**Type parameters:**

#### K :  `keyof T`
**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| item | `T` | - |  The object to patch |
| `Default value` keys | `K` \| `K`[] |  null |  The key or keys to the property(ies) that identify the primary key('s) |
| `Default value` queryString | `string` |  null |  The additional query string without the ?. This can be used to send in addtional odata parameters e.g. $filter, $expand $select |
| `Default value` method | "patch" \| "put" \| "post" | &quot;patch&quot; |  The http method to use for the update. |

**Returns:** `void`
void

___
<a id="query"></a>

###  query

▸ **query**(queryString?: *`string`*): `void`

*Defined in [odata.store.ts:58](https://github.com/lucasheight/odata-observable-store/blob/51c3dfe/src/odata.store.ts#L58)*

Method to return an OData collection

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `Default value` queryString | `string` |  null |  The additional query string without the ?. This can be used to send in addtional odata parameters e.g $filter, $expand $select |

**Returns:** `void`
void

___
<a id="quotekey"></a>

### `<Private>` quoteKey

▸ **quoteKey**(id: *`any`*): `string`

*Defined in [odata.store.ts:349](https://github.com/lucasheight/odata-observable-store/blob/51c3dfe/src/odata.store.ts#L349)*

Determines if string key should be single quoted .

**Parameters:**

| Name | Type |
| ------ | ------ |
| id | `any` |

**Returns:** `string`

___
<a id="remove"></a>

###  remove

▸ **remove**<`K`>(item: *`T`*, keys?: *`K` \| `K`[]*, method?: *"delete" \| "post"*): `void`

*Defined in [odata.store.ts:211](https://github.com/lucasheight/odata-observable-store/blob/51c3dfe/src/odata.store.ts#L211)*

Deletes an item from the odata backend and removes item from the observable store

**Type parameters:**

#### K :  `keyof T`
**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| item | `T` | - |  The object to update |
| `Default value` keys | `K` \| `K`[] |  null |  The key or keys to the property(ies) that identify the primary key('s) |
| `Default value` method | "delete" \| "post" | &quot;delete&quot; |  The http method to use for the update. |

**Returns:** `void`
void

___
<a id="update"></a>

###  update

▸ **update**<`K`>(item: *`T`*, keys?: *`K` \| `K`[]*, queryString?: *`string`*, method?: *"put" \| "post"*): `void`

*Defined in [odata.store.ts:130](https://github.com/lucasheight/odata-observable-store/blob/51c3dfe/src/odata.store.ts#L130)*

Updates an item to the odata backend and updates the observable store with the new value

**Type parameters:**

#### K :  `keyof T`
**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| item | `T` | - |  The object to update |
| `Default value` keys | `K` \| `K`[] |  null |  The key or keys to the property(ies) that identify the primary key('s) |
| `Default value` queryString | `string` |  null |  The additional query string without the ?. This can be used to send in addtional odata parameters e.g. $filter, $expand $select |
| `Default value` method | "put" \| "post" | &quot;put&quot; |  The http method to use for the update. |

**Returns:** `void`
void

___
<a id="updatestore"></a>

### `<Protected>` updateStore

▸ **updateStore**<`K`>(item: *`T`*, operation: *"insert" \| "update" \| "delete"*, keys?: *`K` \| `K`[]*): `void`

*Defined in [odata.store.ts:238](https://github.com/lucasheight/odata-observable-store/blob/51c3dfe/src/odata.store.ts#L238)*

Updates Observable store $state and dispatches notifier$

**Type parameters:**

#### K :  `keyof T`
**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| item | `T` | - |  The item to update |
| operation | "insert" \| "update" \| "delete" | - |  \- |
| `Default value` keys | `K` \| `K`[] |  null |  The key or keys to the property(ies) that identify the primary key('s) |

**Returns:** `void`
void

___

## Object literals

<a id="_initstate"></a>

### `<Private>` _initState

**_initState**: *`object`*

*Defined in [odata.store.ts:16](https://github.com/lucasheight/odata-observable-store/blob/51c3dfe/src/odata.store.ts#L16)*

<a id="_initstate._odata_count"></a>

####  @odata.count

**● @odata.count**: *`undefined`* =  undefined

*Defined in [odata.store.ts:16](https://github.com/lucasheight/odata-observable-store/blob/51c3dfe/src/odata.store.ts#L16)*

___
<a id="_initstate.value"></a>

####  value

**● value**: *`T`[]* =  <T[]>[{}]

*Defined in [odata.store.ts:16](https://github.com/lucasheight/odata-observable-store/blob/51c3dfe/src/odata.store.ts#L16)*

___

___
<a id="_settings"></a>

### `<Private>` _settings

**_settings**: *`object`*

*Defined in [odata.store.ts:33](https://github.com/lucasheight/odata-observable-store/blob/51c3dfe/src/odata.store.ts#L33)*

<a id="_settings.notifyondelete"></a>

####  notifyOnDelete

**● notifyOnDelete**: *`true`* = true

*Defined in [odata.store.ts:35](https://github.com/lucasheight/odata-observable-store/blob/51c3dfe/src/odata.store.ts#L35)*

___
<a id="_settings.notifyonget"></a>

####  notifyOnGet

**● notifyOnGet**: *`false`* = false

*Defined in [odata.store.ts:36](https://github.com/lucasheight/odata-observable-store/blob/51c3dfe/src/odata.store.ts#L36)*

___
<a id="_settings.notifyoninsert"></a>

####  notifyOnInsert

**● notifyOnInsert**: *`true`* = true

*Defined in [odata.store.ts:37](https://github.com/lucasheight/odata-observable-store/blob/51c3dfe/src/odata.store.ts#L37)*

___
<a id="_settings.notifyonupdate"></a>

####  notifyOnUpdate

**● notifyOnUpdate**: *`true`* = true

*Defined in [odata.store.ts:38](https://github.com/lucasheight/odata-observable-store/blob/51c3dfe/src/odata.store.ts#L38)*

___

___


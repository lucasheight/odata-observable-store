[@lucasheight/odata-observable-store](../README.md) > ["store"](../modules/_store_.md) > [Store](../classes/_store_.store.md)

# Class: Store

## Type parameters
#### T 
## Hierarchy

**Store**

## Index

### Constructors

* [constructor](_store_.store.md#constructor)

### Properties

* [_notifier$](_store_.store.md#_notifier_)
* [_state$](_store_.store.md#_state_)
* [notifier$](_store_.store.md#notifier_)
* [settings](_store_.store.md#settings)
* [state$](_store_.store.md#state_)

### Methods

* [dispatchNotifier](_store_.store.md#dispatchnotifier)
* [getState](_store_.store.md#getstate)
* [setState](_store_.store.md#setstate)

### Object literals

* [_settings](_store_.store.md#_settings)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Store**(initialState: *`T`*, settings?: *[IStoreSettings](../interfaces/_istore_.istoresettings.md)*): [Store](_store_.store.md)

*Defined in [store.ts:18](https://github.com/lucasheight/odata-observable-store/blob/e8bdbc6/src/store.ts#L18)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| initialState | `T` | - |
| `Default value` settings | [IStoreSettings](../interfaces/_istore_.istoresettings.md) |  null |

**Returns:** [Store](_store_.store.md)

___

## Properties

<a id="_notifier_"></a>

### `<Protected>` _notifier$

**● _notifier$**: *`Subject`<[IStoreNotifier](../interfaces/_istore_.istorenotifier.md)<`T`>>* =  new Subject()

*Defined in [store.ts:10](https://github.com/lucasheight/odata-observable-store/blob/e8bdbc6/src/store.ts#L10)*

___
<a id="_state_"></a>

### `<Protected>` _state$

**● _state$**: *`BehaviorSubject`<`T`>*

*Defined in [store.ts:9](https://github.com/lucasheight/odata-observable-store/blob/e8bdbc6/src/store.ts#L9)*

___
<a id="notifier_"></a>

###  notifier$

**● notifier$**: *`Observable`<[IStoreNotifier](../interfaces/_istore_.istorenotifier.md)<`T`>>* =  this._notifier$.asObservable()

*Defined in [store.ts:11](https://github.com/lucasheight/odata-observable-store/blob/e8bdbc6/src/store.ts#L11)*

___
<a id="settings"></a>

### `<Protected>` settings

**● settings**: *[IStoreSettings](../interfaces/_istore_.istoresettings.md)*

*Defined in [store.ts:19](https://github.com/lucasheight/odata-observable-store/blob/e8bdbc6/src/store.ts#L19)*

___
<a id="state_"></a>

###  state$

**● state$**: *`Observable`<`T`>*

*Defined in [store.ts:8](https://github.com/lucasheight/odata-observable-store/blob/e8bdbc6/src/store.ts#L8)*

___

## Methods

<a id="dispatchnotifier"></a>

### `<Protected>` dispatchNotifier

▸ **dispatchNotifier**(act: *[action](../enums/_action_enum_.action.md)*, state?: *`T`*): `void`

*Defined in [store.ts:33](https://github.com/lucasheight/odata-observable-store/blob/e8bdbc6/src/store.ts#L33)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| act | [action](../enums/_action_enum_.action.md) | - |
| `Default value` state | `T` |  null |

**Returns:** `void`

___
<a id="getstate"></a>

### `<Protected>` getState

▸ **getState**(): `T`

*Defined in [store.ts:27](https://github.com/lucasheight/odata-observable-store/blob/e8bdbc6/src/store.ts#L27)*

**Returns:** `T`

___
<a id="setstate"></a>

### `<Protected>` setState

▸ **setState**(val: *`T`*): `void`

*Defined in [store.ts:30](https://github.com/lucasheight/odata-observable-store/blob/e8bdbc6/src/store.ts#L30)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| val | `T` |

**Returns:** `void`

___

## Object literals

<a id="_settings"></a>

### `<Private>` _settings

**_settings**: *`object`*

*Defined in [store.ts:12](https://github.com/lucasheight/odata-observable-store/blob/e8bdbc6/src/store.ts#L12)*

<a id="_settings.notifyondelete"></a>

####  notifyOnDelete

**● notifyOnDelete**: *`true`* = true

*Defined in [store.ts:14](https://github.com/lucasheight/odata-observable-store/blob/e8bdbc6/src/store.ts#L14)*

___
<a id="_settings.notifyonget"></a>

####  notifyOnGet

**● notifyOnGet**: *`false`* = false

*Defined in [store.ts:15](https://github.com/lucasheight/odata-observable-store/blob/e8bdbc6/src/store.ts#L15)*

___
<a id="_settings.notifyoninsert"></a>

####  notifyOnInsert

**● notifyOnInsert**: *`true`* = true

*Defined in [store.ts:16](https://github.com/lucasheight/odata-observable-store/blob/e8bdbc6/src/store.ts#L16)*

___
<a id="_settings.notifyonupdate"></a>

####  notifyOnUpdate

**● notifyOnUpdate**: *`true`* = true

*Defined in [store.ts:17](https://github.com/lucasheight/odata-observable-store/blob/e8bdbc6/src/store.ts#L17)*

___

___


[@lucasheight/odata-observable-store](../README.md) › [Globals](../globals.md) › ["projects/odata-observable-store/src/lib/store"](../modules/_projects_odata_observable_store_src_lib_store_.md) › [Store](_projects_odata_observable_store_src_lib_store_.store.md)

# Class: Store ‹**T**›

## Type parameters

▪ **T**

## Hierarchy

* **Store**

## Index

### Constructors

* [constructor](_projects_odata_observable_store_src_lib_store_.store.md#constructor)

### Properties

* [_notifier$](_projects_odata_observable_store_src_lib_store_.store.md#protected-_notifier)
* [_state$](_projects_odata_observable_store_src_lib_store_.store.md#protected-_state)
* [notifier$](_projects_odata_observable_store_src_lib_store_.store.md#notifier)
* [settings](_projects_odata_observable_store_src_lib_store_.store.md#protected-settings)
* [state$](_projects_odata_observable_store_src_lib_store_.store.md#state)

### Methods

* [dispatchNotifier](_projects_odata_observable_store_src_lib_store_.store.md#protected-dispatchnotifier)
* [getState](_projects_odata_observable_store_src_lib_store_.store.md#protected-getstate)
* [setState](_projects_odata_observable_store_src_lib_store_.store.md#protected-setstate)

### Object literals

* [_settings](_projects_odata_observable_store_src_lib_store_.store.md#private-_settings)

## Constructors

###  constructor

\+ **new Store**(`initialState`: T, `settings`: [IStoreSettings](../interfaces/_projects_odata_observable_store_src_lib_istore_.istoresettings.md)): *[Store](_projects_odata_observable_store_src_lib_store_.store.md)*

*Defined in [projects/odata-observable-store/src/lib/store.ts:18](https://github.com/lucasheight/odata-observable-store/blob/787a1ef7/projects/odata-observable-store/src/lib/store.ts#L18)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`initialState` | T | - |
`settings` | [IStoreSettings](../interfaces/_projects_odata_observable_store_src_lib_istore_.istoresettings.md) | null |

**Returns:** *[Store](_projects_odata_observable_store_src_lib_store_.store.md)*

## Properties

### `Protected` _notifier$

• **_notifier$**: *Subject‹[IStoreNotifier](../interfaces/_projects_odata_observable_store_src_lib_istore_.istorenotifier.md)‹T››* = new Subject()

*Defined in [projects/odata-observable-store/src/lib/store.ts:8](https://github.com/lucasheight/odata-observable-store/blob/787a1ef7/projects/odata-observable-store/src/lib/store.ts#L8)*

___

### `Protected` _state$

• **_state$**: *BehaviorSubject‹T›*

*Defined in [projects/odata-observable-store/src/lib/store.ts:7](https://github.com/lucasheight/odata-observable-store/blob/787a1ef7/projects/odata-observable-store/src/lib/store.ts#L7)*

___

###  notifier$

• **notifier$**: *Observable‹[IStoreNotifier](../interfaces/_projects_odata_observable_store_src_lib_istore_.istorenotifier.md)‹T››* = this._notifier$.asObservable()

*Defined in [projects/odata-observable-store/src/lib/store.ts:9](https://github.com/lucasheight/odata-observable-store/blob/787a1ef7/projects/odata-observable-store/src/lib/store.ts#L9)*

___

### `Protected` settings

• **settings**: *[IStoreSettings](../interfaces/_projects_odata_observable_store_src_lib_istore_.istoresettings.md)*

*Defined in [projects/odata-observable-store/src/lib/store.ts:19](https://github.com/lucasheight/odata-observable-store/blob/787a1ef7/projects/odata-observable-store/src/lib/store.ts#L19)*

___

###  state$

• **state$**: *Observable‹T›*

*Defined in [projects/odata-observable-store/src/lib/store.ts:6](https://github.com/lucasheight/odata-observable-store/blob/787a1ef7/projects/odata-observable-store/src/lib/store.ts#L6)*

## Methods

### `Protected` dispatchNotifier

▸ **dispatchNotifier**(`act`: [action](../modules/_projects_odata_observable_store_src_lib_action_type_.md#action), `state`: T): *void*

*Defined in [projects/odata-observable-store/src/lib/store.ts:33](https://github.com/lucasheight/odata-observable-store/blob/787a1ef7/projects/odata-observable-store/src/lib/store.ts#L33)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`act` | [action](../modules/_projects_odata_observable_store_src_lib_action_type_.md#action) | - |
`state` | T | null |

**Returns:** *void*

___

### `Protected` getState

▸ **getState**(): *T*

*Defined in [projects/odata-observable-store/src/lib/store.ts:27](https://github.com/lucasheight/odata-observable-store/blob/787a1ef7/projects/odata-observable-store/src/lib/store.ts#L27)*

**Returns:** *T*

___

### `Protected` setState

▸ **setState**(`val`: T): *void*

*Defined in [projects/odata-observable-store/src/lib/store.ts:30](https://github.com/lucasheight/odata-observable-store/blob/787a1ef7/projects/odata-observable-store/src/lib/store.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`val` | T |

**Returns:** *void*

## Object literals

### `Private` _settings

### ▪ **_settings**: *object*

*Defined in [projects/odata-observable-store/src/lib/store.ts:12](https://github.com/lucasheight/odata-observable-store/blob/787a1ef7/projects/odata-observable-store/src/lib/store.ts#L12)*

###  notifyOnDelete

• **notifyOnDelete**: *true* = true

*Defined in [projects/odata-observable-store/src/lib/store.ts:14](https://github.com/lucasheight/odata-observable-store/blob/787a1ef7/projects/odata-observable-store/src/lib/store.ts#L14)*

###  notifyOnGet

• **notifyOnGet**: *false* = false

*Defined in [projects/odata-observable-store/src/lib/store.ts:15](https://github.com/lucasheight/odata-observable-store/blob/787a1ef7/projects/odata-observable-store/src/lib/store.ts#L15)*

###  notifyOnInsert

• **notifyOnInsert**: *true* = true

*Defined in [projects/odata-observable-store/src/lib/store.ts:16](https://github.com/lucasheight/odata-observable-store/blob/787a1ef7/projects/odata-observable-store/src/lib/store.ts#L16)*

###  notifyOnUpdate

• **notifyOnUpdate**: *true* = true

*Defined in [projects/odata-observable-store/src/lib/store.ts:17](https://github.com/lucasheight/odata-observable-store/blob/787a1ef7/projects/odata-observable-store/src/lib/store.ts#L17)*

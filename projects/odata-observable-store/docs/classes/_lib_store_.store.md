**[@lucasheight/odata-observable-store](../README.md)**

[Globals](../globals.md) › ["lib/store"](../modules/_lib_store_.md) › [Store](_lib_store_.store.md)

# Class: Store <**T**>

## Type parameters

▪ **T**

## Hierarchy

* **Store**

## Index

### Constructors

* [constructor](_lib_store_.store.md#constructor)

### Properties

* [_notifier$](_lib_store_.store.md#protected-_notifier$)
* [_state$](_lib_store_.store.md#protected-_state$)
* [notifier$](_lib_store_.store.md#notifier$)
* [settings](_lib_store_.store.md#protected-settings)
* [state$](_lib_store_.store.md#state$)

### Methods

* [dispatchNotifier](_lib_store_.store.md#protected-dispatchnotifier)
* [getState](_lib_store_.store.md#protected-getstate)
* [setState](_lib_store_.store.md#protected-setstate)

### Object literals

* [_settings](_lib_store_.store.md#private-_settings)

## Constructors

###  constructor

\+ **new Store**(`initialState`: T, `settings`: [IStoreSettings](../interfaces/_lib_istore_.istoresettings.md)): *[Store](_lib_store_.store.md)*

Defined in lib/store.ts:18

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`initialState` | T | - |
`settings` | [IStoreSettings](../interfaces/_lib_istore_.istoresettings.md) |  null |

**Returns:** *[Store](_lib_store_.store.md)*

## Properties

### `Protected` _notifier$

• **_notifier$**: *Subject‹[IStoreNotifier](../interfaces/_lib_istore_.istorenotifier.md)‹T››* =  new Subject()

Defined in lib/store.ts:10

___

### `Protected` _state$

• **_state$**: *BehaviorSubject‹T›*

Defined in lib/store.ts:9

___

###  notifier$

• **notifier$**: *Observable‹[IStoreNotifier](../interfaces/_lib_istore_.istorenotifier.md)‹T››* =  this._notifier$.asObservable()

Defined in lib/store.ts:11

___

### `Protected` settings

• **settings**: *[IStoreSettings](../interfaces/_lib_istore_.istoresettings.md)*

Defined in lib/store.ts:19

___

###  state$

• **state$**: *Observable‹T›*

Defined in lib/store.ts:8

## Methods

### `Protected` dispatchNotifier

▸ **dispatchNotifier**(`act`: [action](../modules/_lib_action_type_.md#action), `state`: T): *void*

Defined in lib/store.ts:33

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`act` | [action](../modules/_lib_action_type_.md#action) | - |
`state` | T |  null |

**Returns:** *void*

___

### `Protected` getState

▸ **getState**(): *T*

Defined in lib/store.ts:27

**Returns:** *T*

___

### `Protected` setState

▸ **setState**(`val`: T): *void*

Defined in lib/store.ts:30

**Parameters:**

Name | Type |
------ | ------ |
`val` | T |

**Returns:** *void*

## Object literals

### `Private` _settings

### ▪ **_settings**: *object*

Defined in lib/store.ts:12

###  notifyOnDelete

• **notifyOnDelete**: *true* = true

Defined in lib/store.ts:14

###  notifyOnGet

• **notifyOnGet**: *false* = false

Defined in lib/store.ts:15

###  notifyOnInsert

• **notifyOnInsert**: *true* = true

Defined in lib/store.ts:16

###  notifyOnUpdate

• **notifyOnUpdate**: *true* = true

Defined in lib/store.ts:17
[@lucasheight/odata-observable-store](../README.md) › [Globals](../globals.md) › ["projects/odata-observable-store/src/lib/helpers"](../modules/_projects_odata_observable_store_src_lib_helpers_.md) › [Helpers](_projects_odata_observable_store_src_lib_helpers_.helpers.md)

# Class: Helpers

## Hierarchy

* **Helpers**

## Index

### Methods

* [IsGuid](_projects_odata_observable_store_src_lib_helpers_.helpers.md#static-isguid)
* [queryParser](_projects_odata_observable_store_src_lib_helpers_.helpers.md#static-queryparser)
* [quoteKey](_projects_odata_observable_store_src_lib_helpers_.helpers.md#static-quotekey)

## Methods

### `Static` IsGuid

▸ **IsGuid**(`value`: string): *boolean*

*Defined in [projects/odata-observable-store/src/lib/helpers.ts:33](https://github.com/lucasheight/odata-observable-store/blob/787a1ef7/projects/odata-observable-store/src/lib/helpers.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *boolean*

___

### `Static` queryParser

▸ **queryParser**(`queryString`: string, `additionalParams`: string[]): *string*

*Defined in [projects/odata-observable-store/src/lib/helpers.ts:7](https://github.com/lucasheight/odata-observable-store/blob/787a1ef7/projects/odata-observable-store/src/lib/helpers.ts#L7)*

parses the query string

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`queryString` | string | - | - |
`additionalParams` | string[] | undefined | array of addition parameters to parse  |

**Returns:** *string*

___

### `Static` quoteKey

▸ **quoteKey**(`id`: string | number): *string*

*Defined in [projects/odata-observable-store/src/lib/helpers.ts:25](https://github.com/lucasheight/odata-observable-store/blob/787a1ef7/projects/odata-observable-store/src/lib/helpers.ts#L25)*

Determines if string key should be single quoted .

**`description`** The main use case for this method is to determine if the key is a guid.
If so, do not quote the string.

**Parameters:**

Name | Type |
------ | ------ |
`id` | string &#124; number |

**Returns:** *string*

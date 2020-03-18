[@lucasheight/odata-observable-store - v1.2.1](../README.md) › [Globals](../globals.md) › ["lib/tests/testData"](_lib_tests_testdata_.md)

# External module: "lib/tests/testData"

## Index

### Interfaces

* [ITestData](../interfaces/_lib_tests_testdata_.itestdata.md)

### Variables

* [TestData](_lib_tests_testdata_.md#const-testdata)

## Variables

### `Const` TestData

• **TestData**: *[ITestData](../interfaces/_lib_tests_testdata_.itestdata.md)[]* =  [
  { Id: 1, Name: "Test 1", LastUpdatedDT: new Date() },
  {
    Id: 2,
    Name: "Test 2",
    LastUpdatedDT: new Date(new Date().setDate(new Date().getDate() + 1))
  },
  {
    Id: 3,
    Name: "Test 3",
    LastUpdatedDT: new Date(new Date().setDate(new Date().getDate() + 2))
  },
  {
    Id: 4,
    Name: "Test 4",
    LastUpdatedDT: new Date(new Date().setDate(new Date().getDate() + 3))
  },
  {
    Id: 5,
    Name: "Test 5",
    LastUpdatedDT: new Date(new Date().setDate(new Date().getDate() + 4))
  }
]

*Defined in [lib/tests/testData.ts:6](https://github.com/lucasheight/odata-observable-store/blob/b97261dd/projects/odata-observable-store/src/lib/tests/testData.ts#L6)*

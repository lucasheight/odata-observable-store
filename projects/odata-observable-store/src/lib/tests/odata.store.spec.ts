/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
import {
  HttpClientTestingModule,
  HttpTestingController,
  TestRequest
} from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { ITestData, TestData } from "./testData";
import { TestDataService } from "./TestDataService";
import { ODataStore } from "../odata.store";
import { IOdataCollection } from "../IOdataCollection";
const testUrl = "/data";
describe("OData Store Tests", () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let store: TestDataService;
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    //testRequest = TestBed.inject(TestRequest);
    store = TestBed.inject(TestDataService); // new TestDataStore(httpClient);
  });
  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });
  //Tests
  it("test HttpClient Get", () => {
    const testData: ITestData[] = TestData;
    httpClient.get<ITestData[]>(testUrl).subscribe(data => {
      //expect(1).toEqual(1);
      expect(data).toEqual(testData);
      expect(data[0].Id).toEqual(1);
    });
    // The following `expectOne()` will match the request's URL.
    // If no requests or multiple requests matched that URL
    // `expectOne()` would throw.
    const req = httpTestingController.expectOne("/data");

    // Assert that the request is a GET.
    expect(req.request.method).toEqual("GET");

    // Respond with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
    req.flush(testData);

    // Finally, assert that there are no outstanding requests.
    httpTestingController.verify();
  });
  it("Store query() should hydrate backing store with test data", () => {
    const testData: ITestData[] = TestData;

    store.state$.subscribe(s => {
      expect(s.value.length > 0).toBeTrue();
      expect(s.value.length === 5).toBeTrue();
    });
    store.query();
    let req = httpTestingController.expectOne("/data?$count=true");
    // Assert that the request is a GET.
    expect(req.request.method).toEqual("GET");

    // Respond with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
    req.flush(testData, { status: 20, statusText: "Ok" });
    store.fill({ "@odata.count": 5, value: testData } as IOdataCollection<
      ITestData
    >);
    // Finally, assert that there are no outstanding requests.
    httpTestingController.verify();
  });
  it("Store query()$ method should return test data", () => {
    const testData: IOdataCollection<ITestData> = {
      value: TestData,
      "@odata.count": TestData.length
    };
    // store.complete = (): void => {
    //   expect(store.complete).toHaveBeenCalled();
    // };

    const obs$ = store.query$();
    obs$.subscribe(s => {
      console.log(s);
      expect(s.value.length > 0).toBeTrue();
      expect(s.value.length === 5).toBeTrue();
    });

    //spyOn(store, "complete").and.returnValue("Fake Complete" as never);
    //store.complete();

    store.state$.subscribe(s => {
      expect(s["@odata.count"]).toEqual(5);
      expect(s.value.length).toEqual(5);
    });

    // store.complete(() => {
    //   console.log("Complete fired");
    //   expect().nothing();
    // });
    store.notifier$.subscribe(s => {
      expect(s.action).toEqual("Query");
    });
    let req = httpTestingController.expectOne("/data?$count=true");
    // Assert that the request is a GET.
    expect(req.request.method).toEqual("GET");

    // Respond with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
    req.flush(testData);
    httpTestingController.verify();
  });
  it("Store insert$ method should insert record in the backing store", () => {
    const testItem: ITestData = {
      Id: 6,
      Name: "Item 6",
      LastUpdatedDT: new Date()
    };
    store.state$.subscribe(s => {
      expect(s["@odata.count"] > 0).toBe(true);
      expect(s.value).toContain(testItem);
    });
    store.notifier$.subscribe(s => {
      expect(s.action).toEqual("Insert");
    });
    store.insert$(testItem).subscribe();
    let req = httpTestingController.expectOne("/data");
    // Assert that the request is a GET.
    expect(req.request.method).toEqual("POST");

    // Respond with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
    req.flush(testItem);
    httpTestingController.verify();
  });
  it("Store update$ method should update record with new props", () => {
    // fill backing store with test data
    store.fill({
      "@odata.count": TestData.length,
      value: TestData
    } as IOdataCollection<ITestData>);
    //updated item
    const item: ITestData = {
      Id: 1,
      Name: "Updated",
      LastUpdatedDT: new Date()
    };

    store.notifier$.subscribe(s => {
      expect(s.action).toEqual("Update");
    });
    store.update$(item, "Id").subscribe(s => {
      store.state$.subscribe(s => {
        expect(s["@odata.count"] > 0).toBe(true);
        const found = s.value.find(f => f.Id == 1).Name;
        expect(found).toEqual("Updated");
      });
      expect(s.Name).toEqual("Updated");
    });
    let req = httpTestingController.expectOne("/data(1)");
    // Assert that the request is a GET.
    expect(req.request.method).toEqual("PUT");

    // Respond with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
    req.flush(item);
    httpTestingController.verify();
  });
});

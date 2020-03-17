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
  it("Store query() should hydrate with test data", () => {
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
      "@odata.count": 5
    };

    const obs$ = store.query$();
    obs$.subscribe(s => {
      console.log(s);
      expect(s.value.length > 0).toBeTrue();
      expect(s.value.length === 5).toBeTrue();
    });
    store.state$.subscribe(s => {
      expect(s["@odata.count"]).toEqual(5);
      expect(s.value.length).toEqual(5);
    });
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
});

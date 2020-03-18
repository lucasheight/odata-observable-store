import { ODataStore } from "../odata.store";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IOdataCollection } from "../IOdataCollection";
import { ITestData } from "./testData";
@Injectable({ providedIn: "root" })
export class TestDataService extends ODataStore<ITestData> {
  baseUrl = "/data";
  constructor(protected http: HttpClient) {
    super(http, { notifyOnGet: true });
  }
  fill = (odata: IOdataCollection<ITestData>): void => this.fillStore(odata);
}

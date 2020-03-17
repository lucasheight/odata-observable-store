/* eslint-disable no-undef */
import { Helpers } from "../helpers";
describe("Helper Tests", () => {
  it("Should parse query parameters to useable string", () => {
    //arr
    const testData: string = "search=findMe&query=find me";

    //act
    const result = Helpers.queryParser(testData);
    //assert
    expect(result).toEqual(`?${testData}`);
  });
  it("Should add additional parameters into the query", () => {
    //arr
    const testData: string = "search=findMe&query=find me";
    const additionalParams: string[] = ["today=great", "yesterday=gone"];
    //act
    const result = Helpers.queryParser(testData, additionalParams);
    //assert
    expect(result).toEqual(`?${testData}&today=great&yesterday=gone`);
  });
  it("Should not add empty additional parameters into the query", () => {
    //arr
    const testData: string = "search=findMe&query=find me";
    const additionalParams: string[] = [];
    //act
    const result = Helpers.queryParser(testData, additionalParams);
    //assert
    expect(result).toEqual(`?${testData}`);
  });
  it("Should return empty string when empty query is used", () => {
    //arr
    const testData: string = "";
    const additionalParams: string[] = [];
    //act
    const result = Helpers.queryParser(testData, additionalParams);
    //assert
    expect(result).toEqual("");
  });
  it("Should return non single quoted value when quote key is number", () => {
    //arr
    const testData: number = 1;
    //act
    const result = Helpers.quoteKey(testData);
    const test = result.substr(0, 1);
    //assert
    //expect(result).toBeNull();
    expect(test).toEqual("1");
  });
  it("Should single quoted value when quote key is string", () => {
    //arr
    const testData: string = "1";
    //act
    const result = Helpers.quoteKey(testData);
    const test = result.substr(0, 3);
    //assert
    //expect(result).toBeNull();
    expect(test).toEqual("'1'");
  });
  it("Should return non single quoted value when quote key is like GUID", () => {
    //arr
    const testData: string = "33179b69-ec77-4d1d-90a1-06f248893d3b";
    //act
    const result = Helpers.quoteKey(testData);
    const test = result.substr(0, 2);
    //assert
    //expect(result).toBeNull();
    expect(test).toEqual("33");
  });
});

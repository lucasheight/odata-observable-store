export interface ITestData {
  Id: number;
  Name: string;
  LastUpdatedDT: Date;
}
export const TestData: ITestData[] = [
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
];

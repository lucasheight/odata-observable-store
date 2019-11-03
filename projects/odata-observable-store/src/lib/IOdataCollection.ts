export interface IOdataCollection<T> {
  "@odata.context"?: string;
  "@odata.type"?: string;
  "@odata.count"?: number | undefined;
  value?: T[];
}

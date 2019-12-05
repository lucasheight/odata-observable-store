export interface IOdataCollection<T> extends IOdataBase {
  "@odata.count"?: number | undefined;
  value?: T[];
}

export interface IOdataBase {
  "@odata.context"?: string;
  "@odata.type"?: string;
}

export interface IOdataResult<T> extends IOdataBase {
  value?: T;
}

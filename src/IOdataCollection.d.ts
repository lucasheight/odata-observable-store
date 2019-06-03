export interface IOdataCollection<T> {
    "@odata.context"?: string;
    "@odata.count"?: number | undefined;
    "value"?: T[];
}   
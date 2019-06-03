export interface IFlight {
    Name: string;
    IcaoCode: string;
    IataCode: string;
    Location: ILocation;

}

export interface ILocation {
    Address: string;
    Loc: ILoc;
    City:ICity;

}
export interface ILoc {
    type: string;
    coordinates: number[]
}
export interface crs {
    type: string;
    properties?: IcrsProps;
}
export interface IcrsProps {
    name: string;
}
export interface ICity {
    Name:string;
    CountryRegion:string;
    Region:string;
}
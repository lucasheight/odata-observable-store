export interface IPeople{
    UserName:string;
    FirstName:string;
    LastName:string;
    MiddleName?:string;
    Gender:Gender;
    Age?:string|number;
    Emails?:string[];
    FavouriteFeature:string;
    Features:string[];
    Cost?:number;
    Budget?:number;
    AddressInfo:IAddress;
    HomeAddress?:any;
}

export interface IAddress{
    Address?:string;
    City?:ICity;
}
export interface ICity{
    Name:string;
    CountryRegion:string;
    Region:string;
}
export enum Gender{
    Male="Male",Female="Female",Unknown="Unknown"
}
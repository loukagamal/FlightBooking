import { Time } from "@angular/common";

export interface AvailableFlights{
   id:String,
   city:String,
   dateLunch:Date,
   fromcountry:String,
   tocountry:String,
   carriers:number,
   totalPrice?:string,
   arrivaltimes:Date,
   departureTimes:string


}
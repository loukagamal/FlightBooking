import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AvailableFlights } from '../home/models/availabelFlights';
import { search } from '../models/search';


@Injectable({
  providedIn: 'root'
})
export class AvailableFlightsService {
  _url="../../../assets/airport.json"
  availableFlightsData!: Observable<AvailableFlights[]>;
  
  constructor(private  _http: HttpClient) { 

  }
  getAllAvailableFlights():Observable<AvailableFlights[]>
  {
   return  this.availableFlightsData= this._http.get<AvailableFlights[]>(this._url).pipe(
     catchError((err)=>
   {
   return throwError(err.message||"Server error");
   })
   )
  }
  // getDataBysearch(search:search){
  //   let data=this.availableFlightsData
  //   return data.filter((data: { country: string | undefined; })=>{
  //     return data.country==search.from
  //    })
     
  //   }

 
  
}

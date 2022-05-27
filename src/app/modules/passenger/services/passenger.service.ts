import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { passengerDetails } from '../models/passengerDetails';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PassengerService {
  _url=""
  constructor(  private  _http: HttpClient) { }
  setPassenger(data1:passengerDetails)
{
 return this._http.post(this._url,data1).pipe(catchError((err)=>
 {
 return throwError(err.message||"Server error");
 })
 )
}

}

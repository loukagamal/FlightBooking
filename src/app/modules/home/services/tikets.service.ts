import { Injectable } from '@angular/core';
import { AvailableFlights } from '../home/models/availabelFlights';

@Injectable({
  providedIn: 'root'
})
export class TiketsService {
tiketBooked!:AvailableFlights;
  constructor() { }
  setTikets(tiket :AvailableFlights){

    this.tiketBooked=tiket;

  }
  getTikets(){
    return this.tiketBooked;
  }
}

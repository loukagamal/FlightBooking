import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AvailableFlights } from '../home/models/availabelFlights';
import { search } from '../models/search';
import { AvailableFlightsService } from '../services/available-flights.service';
import { TiketsService } from '../services/tikets.service';

@Component({
  selector: 'app-available-flights',
  templateUrl: './available-flights.component.html',
  styleUrls: ['./available-flights.component.scss']
})
export class AvailableFlightsComponent implements OnInit {

  @Input() availableFlightsData!:AvailableFlights[];
  ErrMsg="";
  result!: AvailableFlights[];
  previousLabel="";
   nextLabel="";
   tiketBooked!:AvailableFlights;

  constructor(private availableFlights: AvailableFlightsService , private readonly routet:Router ,private tikets :TiketsService) { 
  }

  p=1;

  ngOnInit(): void {
  
  }
  bookNow(tiket :AvailableFlights){
    console.log("ID Tiket"+tiket.id);
   this.tikets.setTikets(tiket);
    this.routet.navigate(['passenger'])
  }
 




 
  
  

  

}

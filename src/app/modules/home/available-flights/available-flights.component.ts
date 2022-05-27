import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AvailableFlights } from '../home/models/availabelFlights';
import { search } from '../models/search';
import { AvailableFlightsService } from '../services/available-flights.service';

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

  constructor(private availableFlights: AvailableFlightsService , private readonly routet:Router) { 
  }

  p=1;

  ngOnInit(): void {
  
  }
  bookNow(){
    
    this.routet.navigate(['passenger'])
  }
  page = 1;
  handlePageChange(event :any) {
    this.page = event;
  }

 
  
  

  

}

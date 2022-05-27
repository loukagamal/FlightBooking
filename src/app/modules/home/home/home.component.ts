import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AvailableFlightsService } from '../services/available-flights.service';
import { AvailableFlights } from './models/availabelFlights';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchForm: FormGroup = new FormGroup({});
  msgErr = "";
  availableFlightsData!: AvailableFlights[];
  ErrMsg = "";
  from = "";
  to = "";
  dataLunch = "";
  dateArrival = "";
  p=1;

  constructor(private fb: FormBuilder, private availableFlights: AvailableFlightsService) { this.initForm()
  
    this.gitAllFligths()
  
  }



  ngOnInit(): void {

  }

  initForm() {

    this.searchForm = this.fb.group({
      from: ['', [Validators.required]],
      to: ['', [Validators.required]],
      dateLunch: [''],
      numberOfPeople: ['', [Validators.min(0)]],


    })
  }
  gitAllFligths() {

    this.availableFlights.getAllAvailableFlights().subscribe((res: AvailableFlights[]) => {
      this.availableFlightsData = res;
    });



  }
  search() {
    if (this.searchForm.valid) {
      console.log(this.searchForm.value);
      this.from = this.searchForm.value.from;
      this.to = this.searchForm.value.to;

      this.from = this.from.toLowerCase();
      this.to = this.to.toLowerCase();

      this.dataLunch = this.searchForm.value.dataLunch;
      this.dateArrival = this.searchForm.value.dateArrival;
      // && this.dataLunch ==data.dataLunch
      //Here you got the filtered array.

      this.availableFlights.getAllAvailableFlights().subscribe((res: any) => {
        this.availableFlightsData = res.filter((data: any) => data.fromcountry == this.from && data.tocountry == this.to);
      });
      this.msgErr = ''
    }
    else {
      window.alert("form err")
      this.msgErr = "form err"
    }
    console.log(this.msgErr);

  }


}

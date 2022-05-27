import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AvailableFlights } from '../../home/home/models/availabelFlights';
import { TiketsService } from '../../home/services/tikets.service';
import { passengerDetails } from '../models/passengerDetails';
import { PassengerService } from '../services/passenger.service';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.scss']
})
export class PassengerDetailsComponent implements OnInit {
  passengerForm: FormGroup = new FormGroup({});
  passengerdata!: passengerDetails;
  tiketBooked!: AvailableFlights;
  tiket = false;



  constructor(private fb: FormBuilder, private passengerervice: PassengerService, private tikets: TiketsService ,private routet:Router) { this.initForm() }

  ngOnInit(): void {
    this.getTiket();
  }

  initForm() {
    this.passengerForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.email]],
      phone: ['', [Validators.minLength(11), Validators.maxLength(12), Validators.pattern("^((\\+02-?)|0)?[0-9]{10}$")]],
      gender: ['', Validators.required],
      code: ['', Validators.required],
      payments: ['', Validators.required],
      cardNumber: ['', Validators.required],
      expired: ['', Validators.required],
      cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(4)]]

    })
  }
  onSubmit() {
    this.passengerdata = this.passengerForm.value
    if (this.passengerForm.valid)
     { this.passengerervice.setPassenger(this.passengerdata)
      this.routet.navigate(['home'])
    } 
    else {window.alert("Pless Complete the data"); }


  }
  getTiket() {
    this.tiketBooked = this.tikets.getTikets();
    if (this.tiketBooked) { return true; }
    else { return false; }

  }


}

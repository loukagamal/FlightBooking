import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passengerDetails } from '../models/passengerDetails';
import { PassengerService } from '../services/passenger.service';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.scss']
})
export class PassengerDetailsComponent implements OnInit {
  passengerForm:FormGroup = new FormGroup({});
  passengerdata!:passengerDetails ;

  constructor(private fb:FormBuilder ,private passengerervice:PassengerService) { this.initForm()  }

  ngOnInit(): void {
  }

  initForm(){
    this.passengerForm = this.fb.group({
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      email:['',[Validators.email]],
      phone:['',[Validators.minLength(11),Validators.maxLength(11),Validators.pattern('/^[0-9-]+$/')]],
      gender:['',Validators.required],
      code:['',Validators.required],
      payments:['',Validators.required],
      cardNumber:['',Validators.required],
      expired:['',Validators.required],
      cvv:['',[Validators.required, Validators.minLength(3),Validators.maxLength(3)]]

    })
  }
  onSubmit(){
    this.passengerdata=this.passengerForm.value
    this.passengerervice.setPassenger( this.passengerdata)
    console.log(this.passengerForm.value);

    
  }

}

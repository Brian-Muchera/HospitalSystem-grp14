import { Component, OnInit } from '@angular/core';
import { PatientService } from './../patientR/patient.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-patient-signup',
  templateUrl: './patient-signup.component.html',
  styleUrls: ['./patient-signup.component.css']
})
export class PatientSignupComponent implements OnInit {
  
  register;

  constructor(private patientService: PatientService) { }

  ngOnInit(): void{
    this.register = {
      first_name:'',
      last_name:'',
      email:'',
      phone:'',
      address:'',
      date_of_birth:'',
      age:'',
      password:'',
      confirm_password:''
    };
  }
  registerPatient(){

  }

}

import { Component, OnInit } from '@angular/core';
import { PatientService } from './../patientR/patient.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-patient-signup',
  templateUrl: './patient-signup.component.html',
  styleUrls: ['./patient-signup.component.css'],
  providers: [PatientService]
})
export class PatientSignupComponent implements OnInit {
  
  register;

  constructor(private patientService: PatientService ) { }

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
    this.patientService.registerNewPatient(this.register).subscribe (
      Response => {
        alert('patient ' + this.register.email + ' has been created Successfully!!')
      },
      error => console.log('error',error)
    );

  }

}

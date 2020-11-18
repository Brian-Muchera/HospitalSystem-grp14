import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})
export class PatientLoginComponent implements OnInit {patient= {

  email: '',
  password: '',
  published: false
};
submitted = false;

  
constructor(private loginService: LoginService) { }

  ngOnInit():void {
  }
  savePatient() {
    const data = {
      title: this.patient.email,
      description: this.patient.password
    };

    this.loginService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

}

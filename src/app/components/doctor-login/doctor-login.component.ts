import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent implements OnInit {doctor= {

  email: '',
  password: '',
  published: false
};
submitted = false;

  
constructor(private loginService: LoginService) { }

  ngOnInit():void {
  }
  saveDoctor() {
    const data = {
      title: this.doctor.email,
      description: this.doctor.password
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

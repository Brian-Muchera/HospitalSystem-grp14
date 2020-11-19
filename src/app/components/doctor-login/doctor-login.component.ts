import { Component, OnInit } from '@angular/core';
import { DoctorloginService } from 'src/app/services/doctorlogin.service';
import { TokenService } from 'src/app/services/token.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css'],
  providers: [DoctorloginService]
})
export class DoctorLoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private doctorloginService: DoctorloginService ,private tokenService: TokenService ) { }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenService.getUser().roles;
    }
  }

  onSubmit() {
    this.doctorloginService.login(this.form).subscribe(
      data => {
        this.tokenService.saveToken(data.accessToken);
        this.tokenService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenService.getUser().roles;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }
}

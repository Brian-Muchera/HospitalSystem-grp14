import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { TokenService } from 'src/app/services/token.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css'],
  providers: [LoginService]
})
export class PatientLoginComponent implements OnInit {
  
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private loginService: LoginService ,private tokenService: TokenService ) { }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenService.getUser().roles;
    }
  }

  onSubmit() {
    this.loginService.login(this.form).subscribe(
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

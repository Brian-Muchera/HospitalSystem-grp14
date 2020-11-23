import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientLoginComponent } from './components/patient-login/patient-login.component';
import { UserBoardComponent } from './components/user-board/user-board.component';
import { DoctorsBoardComponent } from './components/doctors-board/doctors-board.component';
import { PatientSignupComponent } from './patient-signup/patient-signup.component';
import { from } from 'rxjs';

import { authInterceptorProviders } from './../app/_helpers/auth.interceptors';

@NgModule({
  declarations: [
    AppComponent,
    PatientLoginComponent,
    UserBoardComponent,
    DoctorsBoardComponent, 
    PatientSignupComponent,
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

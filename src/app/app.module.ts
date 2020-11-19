

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginBoardComponent } from './components/login-board/login-board.component';
import { PatientLoginComponent } from './components/patient-login/patient-login.component';
import { DoctorLoginComponent } from './components/doctor-login/doctor-login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserBoardComponent } from './components/user-board/user-board.component';
import { DoctorsBoardComponent } from './components/doctors-board/doctors-board.component';



import { PatientSignupComponent } from './patient-signup/patient-signup.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [

    AppComponent,
    LoginBoardComponent,
    PatientLoginComponent,
    DoctorLoginComponent,
    UserBoardComponent,
    DoctorsBoardComponent

    AppComponent,   
    PatientSignupComponent

import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule,
    HttpClientModule

    HttpClientModule,
    FormsModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

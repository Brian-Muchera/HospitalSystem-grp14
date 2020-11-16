import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { PatientSignupComponent } from './patient-signup/patient-signup.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorLoginComponent,
    PatientSignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginBoardComponent } from './components/login-board/login-board.component';
import { PatientLoginComponent } from './components/patient-login/patient-login.component';
import { DoctorLoginComponent } from './components/doctor-login/doctor-login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginBoardComponent,
    PatientLoginComponent,
    DoctorLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

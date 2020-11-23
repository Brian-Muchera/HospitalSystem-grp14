

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingComponent } from './booking/booking/booking.component';
// import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';

import { PatientLoginComponent } from './components/patient-login/patient-login.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserBoardComponent } from './components/user-board/user-board.component';
import { DoctorsBoardComponent } from './components/doctors-board/doctors-board.component';

import { authInterceptorProviders } from './../app/_helpers/auth.interceptors';

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    PatientLoginComponent,
    UserBoardComponent,
    DoctorsBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule,
    HttpClientModule,
    Headers,
  ],
  
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

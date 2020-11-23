import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { DashboardloginComponent } from './dashboardlogin/dashboardlogin.component';
import { FooterComponent } from './footer/footer.component';
import { LoginBoardComponent } from './components/login-board/login-board.component';
import { PatientLoginComponent } from './components/patient-login/patient-login.component';
import { DoctorLoginComponent } from './components/doctor-login/doctor-login.component';
import { UserBoardComponent } from './components/user-board/user-board.component';
import { DoctorsBoardComponent } from './components/doctors-board/doctors-board.component';
import { PatientSignupComponent } from './patient-signup/patient-signup.component';
import { from } from 'rxjs';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TestimonialsComponent,
    DashboardloginComponent,
    FooterComponent,
    LoginBoardComponent,
    PatientLoginComponent,
    DoctorLoginComponent,
    UserBoardComponent,
    DoctorsBoardComponent, 
    PatientSignupComponent,
    ProfileComponent,


    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

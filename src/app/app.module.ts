import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientLoginComponent } from './components/patient-login/patient-login.component';
import { DoctorsBoardComponent } from './components/doctors-board/doctors-board.component';
import { PatientSignupComponent } from './patient-signup/patient-signup.component';
import { HomeComponent } from './home/home.component';
import { from } from 'rxjs';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { authInterceptorProviders } from './../app/_helpers/auth.interceptors';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BookingComponent } from './booking/booking/booking.component';
import { RecordsComponent } from './records/records.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientLoginComponent,
    DoctorsBoardComponent, 
    PatientSignupComponent,
    HomeComponent,
    AboutComponent,
    TestimonialsComponent,
    FooterComponent,
    ProfileComponent,
    BoardAdminComponent,
    BookingComponent,
    RecordsComponent

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






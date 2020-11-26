import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { DashboardloginComponent } from './dashboardlogin/dashboardlogin.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { PatientLoginComponent } from './components/patient-login/patient-login.component';
import { BookingComponent } from './booking/booking/booking.component';
import { ProfileComponent } from './profile/profile.component';
import { PatientSignupComponent } from './patient-signup/patient-signup.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { RecordsComponent } from './records/records.component';


const routes: Routes = [
  { path:'',component:HomeComponent},
  { path:'services',component:AboutComponent},
  { path:'testimonials',component:TestimonialsComponent},
  //{ path:'dashboardlogin',component:DashboardloginComponent},
  { path: 'login', component: PatientLoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'register', component: PatientSignupComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'bookappointments', component: BookingComponent },
  { path: 'records', component: RecordsComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





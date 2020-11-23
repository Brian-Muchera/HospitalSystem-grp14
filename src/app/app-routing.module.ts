import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardloginComponent } from './dashboardlogin/dashboardlogin.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { LoginBoardComponent } from './components/login-board/login-board.component';
import { PatientLoginComponent } from './components/patient-login/patient-login.component';
import { DoctorLoginComponent } from './components/doctor-login/doctor-login.component';
import { UserBoardComponent } from './components/user-board/user-board.component';
import { ProfileComponent } from './profile/profile.component';
import { PatientSignupComponent } from './patient-signup/patient-signup.component'


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'services',component:AboutComponent},
  {path:'testimonials',component:TestimonialsComponent},
  {path:'dashboardlogin',component:DashboardloginComponent},
  //{ path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginBoardComponent },
  { path: 'login/patient', component: PatientLoginComponent },
  { path: 'login/doctor', component:  DoctorLoginComponent },
  { path: 'user', component:  UserBoardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'register', component: PatientSignupComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }







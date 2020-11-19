import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardloginComponent } from './dashboardlogin/dashboardlogin.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'services',component:AboutComponent},
  {path:'testimonials',component:TestimonialsComponent},
  {path:'dashboardlogin',component:DashboardloginComponent},

import { LoginBoardComponent } from './components/login-board/login-board.component';
import { PatientLoginComponent } from './components/patient-login/patient-login.component';
import { DoctorLoginComponent } from './components/doctor-login/doctor-login.component';
import { UserBoardComponent } from './components/user-board/user-board.component';


const routes: Routes = [ 
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginBoardComponent },
  { path: 'login/patient', component: PatientLoginComponent },
  { path: 'login/doctor', component:  DoctorLoginComponent },
  { path: 'user', component:  UserBoardComponent },
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }







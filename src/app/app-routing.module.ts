import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

import { BookinFormComponent } from 'src/app/booking/bookin-form/bookin-form.component'
// import { BookinFormComponent } from './booking/bookin-form/bookin-form.component';


const routes: Routes = [
  { path: '', redirectTo: 'bookappointments', pathMatch: 'full'},
  // { path: 'home', component: HomeComponent },
  { path: 'bookappointments', component: BookinFormComponent }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }







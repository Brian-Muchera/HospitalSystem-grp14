import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginBoardComponent } from './components/login-board/login-board.component';
import { PatientLoginComponent } from './components/patient-login/patient-login.component';
import { DoctorLoginComponent } from './components/doctor-login/doctor-login.component';


const routes: Routes = [ 
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginBoardComponent },
  { path: 'login/patient', component: PatientLoginComponent },
  { path: 'login/doctor', component:  DoctorLoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

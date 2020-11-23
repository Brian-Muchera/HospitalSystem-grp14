import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientLoginComponent } from './components/patient-login/patient-login.component';

import { UserBoardComponent } from './components/user-board/user-board.component';
import { ProfileComponent } from './profile/profile.component';
import { PatientSignupComponent } from './patient-signup/patient-signup.component'


const routes: Routes = [ 
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: PatientLoginComponent },
  { path: 'user', component:  UserBoardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'register', component: PatientSignupComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }







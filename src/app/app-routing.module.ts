import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientLoginComponent } from './components/patient-login/patient-login.component';

import { UserBoardComponent } from './components/user-board/user-board.component';


const routes: Routes = [ 
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: PatientLoginComponent },
  { path: 'user', component:  UserBoardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

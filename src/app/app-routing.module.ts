import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingComponent } from './booking/booking/booking.component';
// import { BookinFormComponent } from './booking/bookin-form/bookin-form.component';
import { PatientLoginComponent } from './components/patient-login/patient-login.component';
import { UserBoardComponent } from './components/user-board/user-board.component';



const routes: Routes = [
  { path: '', redirectTo: 'bookappointments', pathMatch: 'full'},
  // { path: 'home', component: HomeComponent },
  { path: 'bookappointments', component: BookingComponent },
  { path: 'login', component: PatientLoginComponent },
  { path: 'user', component:  UserBoardComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

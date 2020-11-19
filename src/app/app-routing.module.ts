import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

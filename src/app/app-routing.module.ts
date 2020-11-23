import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingComponent } from './booking/booking/booking.component';
// import { BookinFormComponent } from './booking/bookin-form/bookin-form.component';


const routes: Routes = [
  { path: '', redirectTo: 'bookappointments', pathMatch: 'full'},
  // { path: 'home', component: HomeComponent },
  { path: 'bookappointments', component: BookingComponent }

];

// const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

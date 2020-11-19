import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { RecordsComponent } from './records/records.component'


const routes: Routes = [
  { path:'', redirectTo:'home',pathMatch: 'full' },
  { path: 'records', component: RecordsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

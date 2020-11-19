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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

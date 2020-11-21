

import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginBoardComponent } from './components/login-board/login-board.component';
import { PatientLoginComponent } from './components/patient-login/patient-login.component';
import { DoctorLoginComponent } from './components/doctor-login/doctor-login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserBoardComponent } from './components/user-board/user-board.component';
import { DoctorsBoardComponent } from './components/doctors-board/doctors-board.component';



import { PatientSignupComponent } from './patient-signup/patient-signup.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [

    AppComponent,
    LoginBoardComponent,
    PatientLoginComponent,
    DoctorLoginComponent,
    UserBoardComponent,
    DoctorsBoardComponent

    AppComponent,   
    PatientSignupComponent

import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,


=======
import { NgModule,ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNavComponent } from './mat-nav/mat-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableComponent } from './mat-table/mat-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatBoardComponent } from './mat-board/mat-board.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { BookinFormComponent } from './booking/bookin-form/bookin-form.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { Routes, RouterModule } from '@angular/router';

import { AuthRequestOptions } from './auth-request';

import { RequestOptions } from '@angular/http';
import { AuthErrorHandler } from './auth-error-handler';
import { AuthguardGuard } from './guard/authguard.guard';
// import { ErrorHandler } from '@an'


@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    MatNavComponent,
    MatTableComponent,
    MatBoardComponent,
    BookinFormComponent,
    AuthErrorHandler,
    AuthguardGuard
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,


    FormsModule,
    HttpClientModule

    HttpClientModule,
    FormsModule

  ],

  providers: [],
  bootstrap: [AppComponent]

    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,

    FormsModule,
    HttpClientModule
   
  ],
  exports: [RouterModule],
  providers: [
    {
      provide: RequestOptions,
      useClass: AuthRequestOptions,
      
  
    },
    {
      provide: ErrorHandler, 
      useClass: AuthErrorHandler
    }
   ],
  bootstrap: [AppComponent],
  

})
export class AppModule { }

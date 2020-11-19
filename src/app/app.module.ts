import { BrowserModule } from '@angular/platform-browser';
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

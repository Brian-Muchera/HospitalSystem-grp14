import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecordsComponent } from './records/records.component';
import { HttpClientModule } from '@angular/common/http'
import { from } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthRequestOptions } from './auth.request';
import { RequestOptions } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    RecordsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: RequestOptions,
      useClass: AuthRequestOptions
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

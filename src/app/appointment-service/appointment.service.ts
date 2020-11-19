import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



// const baseUrl = 'http://127.0.0.1:8000/appointments/';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {



  constructor(private http: HttpClient) { }

  newAppointments(appointmentsData): Observable<any> {
    return this.http.post('https://hosi14.herokuapp.com/appointments/', appointmentsData);
  }

}

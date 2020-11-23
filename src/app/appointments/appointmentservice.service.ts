import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppointmentserviceService {

  

  constructor(private http: HttpClient) { }

  newAppointments(appointmentsData): Observable<any> {
    return this.http.post('https://hosi14.herokuapp.com/appointments/', appointmentsData);
  }

}

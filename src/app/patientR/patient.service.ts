import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  registerNewPatient(patientData): Observable<any> {
    return this.http.post('https://hosi14.herokuapp.com/api/register/patient/',patientData);
  }

}
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_API = 'http://127.0.0.1:8000/api/login/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};




@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(BASE_API + 'user/', {
      email: credentials.email,
      password: credentials.password,
    }, httpOptions);
  }
}
      
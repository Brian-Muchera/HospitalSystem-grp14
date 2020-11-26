import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_API = 'https://hosi14.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(BASE_API + 'all', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(BASE_API + 'appointments/', { responseType: 'text' });
  }

  }
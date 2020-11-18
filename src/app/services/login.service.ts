import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const baseUrl = 'https://hosi14.herokuapp.com/api/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  

  constructor(private http: HttpClient) { }


  create(data: any) {
    return this.http.post(baseUrl, data);
  }
}

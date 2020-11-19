import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'https://hosi14.herokuapp.com/appointments/'

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  //  private REST_API_SERVICE = "https://hosi14.herokuapp.com/appointments";

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.get(baseUrl);
  }

  get(id): Observable<any> {
    return this.http.get(`${baseUrl}`);
  }

  // public sendGetRequest(){
  //   return this.httpClient.get(this.REST_API_SERVICE);
  // }
}

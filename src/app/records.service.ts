import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  private REST_API_SERVICE = ""

  constructor(private httpClient: HttpClient) { }
}

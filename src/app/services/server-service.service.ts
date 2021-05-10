import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerServiceService {

  baseUrl = 'http://localhost:5000/';
  constructor(private http: HttpClient) {

  }

  registerUser(name: String, password: String): Observable<Object> {
    return this.http.post(this.baseUrl + "api/users/create", {first_name: name, password: password, date_of_birth: Date.now()})
  }
}
export interface User {
  name: String,
  password: String,
  _id? : String
}

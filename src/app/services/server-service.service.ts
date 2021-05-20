import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerServiceService {

  baseUrl = 'http://localhost:5000/';
  token: String = '';
  constructor(private http: HttpClient) {

  }

  registerUser(name: String, password: String): Observable<Object> {
    return this.http.post(this.baseUrl + "api/users/create", {first_name: name, password: password, date_of_birth: Date.now()})
  }

  post<T>(path: String, data: {}): Observable<T> {
    return this.http.post<T>(this.baseUrl + path, data)
  }

  postWithToken<T>(path: String, data: {}, headers?: object): Observable<T> {
    return this.http.post<T>(this.baseUrl + path, data, this.getOptions(headers))
  }
  getWithToken<T>(path: String, headers?: object): Observable<T> {
    return this.http.get<T>(this.baseUrl + path, this.getOptions(headers))
  }


  getOptions(headers?: any) {
    headers = headers? headers : {};
    headers['content-type'] = 'application/json';
    headers['x-access-token'] = this.token;
    return {
      headers: new HttpHeaders(headers)
    }
  }
}
export interface User {
  name: String,
  password: String,
  _id? : String
}

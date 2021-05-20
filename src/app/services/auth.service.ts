import { Injectable } from '@angular/core';
import { ServerServiceService } from './server-service.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User = {};

  constructor(private service: ServerServiceService, private router: Router) { }

  login(email: String, password: String) {
    this.service.post<User>('auth/login', {email, password}).subscribe(data=> {
      console.log(data);
      if(data && data.token){
        this.service.token = data.token;
        this.user = data;
        // save in local storage if you want to
        if(this.user.roleNumber && this.user.roleNumber > 400) {
          // go to view all users
          this.router.navigate(['/manage/allUsers']);
        }
      }
    });
  }
}

export interface User {
  first_name?: String;
  email?: String;
  role?: String;
  roleNumber?: number;
  token?: String
}

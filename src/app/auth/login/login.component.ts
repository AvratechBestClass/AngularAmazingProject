import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';
  constructor(private userService: AuthService) { }

  ngOnInit(): void {
  }

  Login() {
    this.userService.login(this.email, this.password);
  }

}

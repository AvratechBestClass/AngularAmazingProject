import { Component, OnInit } from '@angular/core';
import { ServerServiceService } from '../services/server-service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private server: ServerServiceService) { }

  name = '';
  password = '';

  ngOnInit(): void {
  }

  register() {
    this.server.registerUser(this.name, this.password).subscribe(data=>{
      console.log(data);
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/services/auth.service';
import { ServerServiceService } from 'src/app/services/server-service.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  users: User [] = [];
  constructor(private server: ServerServiceService) {
    server.getWithToken<User[]>('api/users/getAll').subscribe(data => {
      this.users = data;
    })
   }

  ngOnInit(): void {

  }

}

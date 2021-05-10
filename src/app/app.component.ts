import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Izik';
  user = "";

  constructor(private http: HttpClient) {

  }
  test() {
    this.http.post("http://localhost:8080/user/2145", { name: "blalallalalla" }).subscribe((data) => {
      this.user = JSON.stringify(data);
    })
  }
}

import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import {User} from "./user";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "City Rats";
  users;
  Username;
  Password;
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
      this.getUsers();

  }

  getUsers() {
    this.http.get("https://api.github.com/users").subscribe(data => {
      this.users = data;
    });

  }

  onUserInput(value) {
    this.Username = value;
  }
  signIn() {

    for (let i = 0, len = this.users.length; i < len; i++) {
      if (this.users[i].login === this.Username ) {
        alert("You have logged in!");
        return;
      }
    }
    alert("Invalid Username or Password!");
  }
}

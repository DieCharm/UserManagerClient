import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username: string = '';

  constructor(private authentication: AuthenticationService,
              private router: Router) { }

  ngOnInit(): void {
    this.username = this.authentication.getUsername();
  }

  logout(): void {
    this.authentication.logout();
    this.router.navigate(["login"]);
  }

}

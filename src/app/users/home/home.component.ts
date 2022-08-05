import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authentication: AuthenticationService,
              private router: Router) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.authentication.logout();
    this.router.navigate(["login"]);
  }

}

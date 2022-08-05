import { Component } from '@angular/core';
import { Login } from "../../../models/login";
import {AuthenticationService} from "../../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginModel: Login = new Login();
  errorMessage: string = '';

  constructor(private authentication: AuthenticationService,
              private router: Router) { }

  login(): void {
    this.authentication.login(this.loginModel)
      .subscribe({
        next: token =>
        {
          localStorage.setItem("token", token);
          if (this.authentication.isLoggedIn())
          {
            this.router.navigate([""]);
          }
        },
        error: () =>
        {
          this.errorMessage = "Login error. Please try again";
          this.loginModel = new Login();
        }
      });

  }

}

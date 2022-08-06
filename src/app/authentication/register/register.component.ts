import { Component } from '@angular/core';
import {Register} from "../../../models/register";
import {AuthenticationService} from "../../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerModel: Register = new Register();
  errorMessage: string = '';
  registered: boolean = false;

  constructor(private authentication: AuthenticationService,
              private router: Router) { }

  register(): void {
    this.authentication.register(this.registerModel)
      .subscribe({
        next: () =>
          this.registered = true,
        error: () =>
        {
          this.errorMessage = "Registration error. Please try again";
          this.registerModel = new Register();
        }
      });
  }

  goToHome(): void {
    if (this.authentication.isLoggedIn())
    {
      this.router.navigate([""]);
    }
    else
    {
      alert("First confirm your email");
    }
  }

}

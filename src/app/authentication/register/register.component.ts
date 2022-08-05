import { Component } from '@angular/core';
import {Register} from "../../../models/register";
import {AuthenticationService} from "../../../services/authentication.service";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerModel: Register = new Register();
  errorMessage: string = '';
  registered: boolean = false;

  constructor(private authentication: AuthenticationService) { }

  register(): void {
    this.authentication.register(this.registerModel)
      .subscribe({
        next: () =>
          this.registered = true,
        error: (response: HttpErrorResponse) =>
          this.errorMessage = response.message
      });
  }

}

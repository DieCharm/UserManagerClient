import { Component } from '@angular/core';
import {Register} from "../../../models/register";
import {AuthenticationService} from "../../../services/authentication.service";

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
        error: () =>
        {
          this.errorMessage = "Registration error. Please try again";
          this.registerModel = new Register();
        }
      });
  }

}

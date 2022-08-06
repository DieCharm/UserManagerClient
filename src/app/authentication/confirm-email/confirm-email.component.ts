import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ConfirmEmail} from "../../../models/confirmEmail";
import {AuthenticationService} from "../../../services/authentication.service";

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.css']
})
export class ConfirmEmailComponent implements OnInit {

  errorMessage: string = '';

  constructor(private authentication: AuthenticationService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.confirmEmail();
  }

  confirmEmail() {
    const token = this.route.snapshot.queryParams['token'];
    const email = this.route.snapshot.queryParams['email'];
    const confirmation = new ConfirmEmail(email, token);
    this.authentication.confirmEmail(confirmation)
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
          this.errorMessage = "Confirmation error. Please try again";
        }
      });
  }

}

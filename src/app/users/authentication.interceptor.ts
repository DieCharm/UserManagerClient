import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthenticationService} from "../../services/authentication.service";

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private authentication: AuthenticationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler):
    Observable<HttpEvent<unknown>>
  {
    if (this.authentication.isLoggedIn())
    {
      const token = localStorage.getItem("token");
      const authenticated = request.clone({
        headers: request.headers.set("Authorization",
          "Bearer " + token)
      });
      return next.handle(authenticated);
    }
    return next.handle(request);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Login} from "../models/login";
import {environment} from "../environments/environment";
import {Observable} from "rxjs";
import {JwtHelperService} from "@auth0/angular-jwt";
import {Register} from "../models/register";
import {ConfirmEmail} from "../models/confirmEmail";

const jwtHelper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public client: HttpClient) { }

  register(user: Register): Observable<string> {
    return this.client.post<string>(
      `${environment.authenticationLink}/register`, user);
  }

  confirmEmail(confirmation: ConfirmEmail): Observable<string> {
    return this.client.post<string>(
      `${environment.authenticationLink}/confirm-email`, confirmation);
  }

  login(user: Login): Observable<string> {
    return this.client.post<string>(
      `${environment.authenticationLink}/login`, user);
  }

  logout(): void {
    localStorage.removeItem("token");
  }

  isLoggedIn(): boolean {
    let token = localStorage.getItem("token");
    if (token)
    {
      if (!jwtHelper.isTokenExpired(token))
      {
        return true;
      }
    }
    localStorage.removeItem("token");
    return false;
  }

  getUsername(): string {
    let token = localStorage.getItem("token");
    var payload = jwtHelper.decodeToken(
      (token !== undefined && token !== null)
      ? token
      : undefined);
    return payload ? payload.unique_name : '';
  }
}

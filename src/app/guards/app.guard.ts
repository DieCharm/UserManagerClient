import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationService} from "../../services/authentication.service";

@Injectable({
  providedIn: 'root'
})
export class AppGuard implements CanActivate {

  constructor(private authentication: AuthenticationService,
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  {
    if (!this.authentication.isLoggedIn())
    {
      this.router.navigate(["login"]);
      return false;
    }
    else
    {
      return true;
    }
  }

}

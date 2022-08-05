import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';
import { ConfirmEmailComponent } from './authentication/confirm-email/confirm-email.component';
import { CrudComponent } from './users/crud/crud.component';
import { UserComponent } from './users/user/user.component';
import { FormComponent } from './users/form/form.component';
import {FormsModule} from "@angular/forms";
import {Routes, RouterModule} from "@angular/router";
import { HomeComponent } from './users/home/home.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {JwtModule} from "@auth0/angular-jwt";
import {AppGuard} from "./guards/app.guard";
import {AuthGuard} from "./guards/auth.guard";
import {AuthenticationInterceptor} from "./users/authentication.interceptor";

const appRoutes: Routes = [
  {path: "", component: HomeComponent, canActivate: [AppGuard]},
  {path: "login", component: LoginComponent, canActivate: [AuthGuard]},
  {path: "register", component: RegisterComponent, canActivate: [AuthGuard]},
  {path: "confirm-email", component: ConfirmEmailComponent, canActivate: [AuthGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ConfirmEmailComponent,
    CrudComponent,
    UserComponent,
    FormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    JwtModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthenticationInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

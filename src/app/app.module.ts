import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';
import { ConfirmEmailComponent } from './authentication/confirm-email/confirm-email.component';
import { CrudComponent } from './users/crud/crud.component';
import { UserComponent } from './users/user/user.component';
import { FormComponent } from './users/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ConfirmEmailComponent,
    CrudComponent,
    UserComponent,
    FormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

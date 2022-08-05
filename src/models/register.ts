import {environment} from "../environments/environment";

export class Register {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  clientAddress: string;

  constructor(username: string = '',
              email: string = '',
              pass: string = '',
              confirmPass: string = '')
  {
    this.username = username;
    this.email = email;
    this.password = pass;
    this.confirmPassword = confirmPass;
    this.clientAddress = environment.confirmationLink;
  }
}

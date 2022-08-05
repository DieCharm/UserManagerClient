export class User {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: Date;
  email: string;
  phoneNumber: string;
  info: string;

  constructor(id: number = 0,
              firstname: string = '',
              lastname: string = '',
              birthdate: Date = new Date(),
              email: string = '',
              phone: string = '',
              info: string = '')
  {
    this.id = id;
    this.firstName = firstname;
    this.lastName = lastname;
    this.birthDate = birthdate;
    this.email = email;
    this.phoneNumber = phone;
    this.info = info;
  }
}

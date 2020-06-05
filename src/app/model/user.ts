export class LoginItem {
  username: string;
  password: string;
}

export class RegistrationModel extends LoginItem {
  id: number;
  name: string;
  surname: string;
  age: number;
  email: string;
  phone: string;
}

export class User {
  email: string;
  password: string;
  userType: string;
  firstName: string;
  lastName: string;

  constructor(email, password, userType, firstName, lastName) {
    this.email = email;
    this.password = password;
    this.userType = userType;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  toString() {
    return 'User - toString: ' + this.email + ', ' + this.password + ', ' +
      this.userType + ', ' + this.firstName + ', ' + this.lastName;
  }
}

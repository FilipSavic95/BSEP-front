import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent implements OnInit {

  oldPassword: string;
  newPassword: string;
  repeatPassword: string;

  constructor() {
  }

  ngOnInit() {
  }

  changePassword() {
    if (this.oldPassword.length === 0) {
      return;
    }
    if (this.newPassword !== this.repeatPassword) {
      return;
    }
    return;
  }
}

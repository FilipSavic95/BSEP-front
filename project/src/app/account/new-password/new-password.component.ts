import {Component, OnInit} from '@angular/core';
import {AbstractControl} from '@angular/forms';

import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import {AccountService} from '../account.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent implements OnInit {

  oldPassword = '';
  newPassword = '';
  repeatedPassword = '';
  newPasswordFormGroup: FormGroup;

  errorMessage = '';

  constructor(private fb: FormBuilder,
              private accountService: AccountService) {
    this.newPasswordFormGroup = fb.group({
        oldPasswordCtrl:    ['', Validators.compose([Validators.required, Validators.minLength(6)])],
        newPasswordCtrl:    ['', Validators.compose([Validators.required, Validators.maxLength(30), Validators.minLength(6)])],
        repeatedPasswordCtrl: ['', Validators.compose([Validators.required])]
      },
      {
        validator: this.matchPassword // my validation method
      });
  }

  ngOnInit() {
  }

  changePassword() {

    if (this.newPassword !== this.repeatedPassword) {
      this.errorMessage = 'No-no! New and repeated passwords must match.';
      return;
    }
    if (this.newPassword.length === 0) {
      this.errorMessage = 'No-no! New password must not be empty.';
      return;
    }
    if (this.oldPassword.length === 0) {
      this.errorMessage = 'No-no! Old password must not be empty';
      return;
    }

    this.accountService.changePassword(this.oldPassword, this.newPassword, this.repeatedPassword)
      .subscribe(
        res => {
          console.log(res);
        }
      );
  }


  // https://scotch.io/@ibrahimalsurkhi/match-password-validation-with-angular-2
  matchPassword(AC: AbstractControl) {

    const newPasswordCtrl = AC.get('newPasswordCtrl');
    const repeatedPasswordCtrl = AC.get('repeatedPasswordCtrl');

    const newPassword = newPasswordCtrl.value;
    const repeatedPassword = repeatedPasswordCtrl.value;

    if (newPasswordCtrl.valid) {
      const regexLower = /(?=.*[a-z])/;
      if (! regexLower.test(newPassword)) {
        AC.get('newPasswordCtrl').setErrors( { missingLower: true});
        return null;
      }

      const regexUpper = /(?=.*[A-Z])/;
      if (! regexUpper.test(newPassword)) {
        AC.get('newPasswordCtrl').setErrors( { missingUpper: true});
        return;
      }

      const regexNumber = /(?=.*[0-9])/;
      if (! regexNumber.test(newPassword)) {
        AC.get('newPasswordCtrl').setErrors( { missingNumber: true});
        return;
      }

      const regexSpecial = /(?=.*[@#$%])/;
      if (! regexSpecial.test(newPassword)) {
        AC.get('newPasswordCtrl').setErrors( { missingSpecial: true});
        return;
      }

      if (repeatedPasswordCtrl.valid) {
        if (repeatedPassword !== newPassword) {
          AC.get('repeatedPasswordCtrl').setErrors( {passwordMismatch: true});
        }
      }
    }

  }
}

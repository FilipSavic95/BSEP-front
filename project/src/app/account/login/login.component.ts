import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';
import { PrincipalService } from '../auth/principal.service';

import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import {AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  password: string;
  username: string;
  form: FormGroup;

  loading = false;

  errorMessage = '';

  constructor(private fb: FormBuilder,
              private accountService: AccountService,
              private router: Router,
              private principalService: PrincipalService) {
      this.form = fb.group({
        usernameCtrl: ['', Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(6)])],
        passwordCtrl: ['', Validators.compose([Validators.required, Validators.maxLength(30), Validators.minLength(6)])]
      },
        {
        validator: this.matchPassword // my validation method
      });
  }


  ngOnInit() {
    this.logout();
  }

  login() {
    this.loading = true;
    this.accountService.login({username: this.username, password: this.password})
      .subscribe((resp) => {
        this.loading = false;
        console.log(resp);

        this.username = '';
        this.password = '';
        this.form.controls['usernameCtrl'].markAsUntouched();
        this.form.controls['usernameCtrl'].markAsPristine();
        this.form.controls['passwordCtrl'].markAsUntouched();
        this.form.controls['passwordCtrl'].markAsPristine();

        if (resp.ok) {
          if (this.principalService.isAuthor()) {
            this.router.navigate(['/author']);
          }
          // if (this.principalService.isEditor()) {
          //   this.router.navigate(['/editor']);
          // }
          this.username = '';
          this.password = '';
        } else {
          this.errorMessage = resp.error;
        }
    });
  }

  logout() {
    this.accountService.logout();
  }


  // https://scotch.io/@ibrahimalsurkhi/match-password-validation-with-angular-2
  matchPassword(AC: AbstractControl) {

    const passwordCtrl = AC.get('passwordCtrl'); // to get value from the input tag
    const password = passwordCtrl.value;

    if (passwordCtrl.valid) {
      const regexLower = /(?=.*[a-z])/;
      if (! regexLower.test(password)) {
        AC.get('passwordCtrl').setErrors( { missingLower: true});
        return null;
      }

      const regexUpper = /(?=.*[A-Z])/;
      if (! regexUpper.test(password)) {
        AC.get('passwordCtrl').setErrors( { missingUpper: true});
        return;
      }

      const regexNumber = /(?=.*[0-9])/;
      if (! regexNumber.test(password)) {
        AC.get('passwordCtrl').setErrors( { missingNumber: true});
        return;
      }

      const regexSpecial = /(?=.*[@#$%])/;
      if (! regexSpecial.test(password)) {
        AC.get('passwordCtrl').setErrors( { missingSpecial: true});
        return;
      }
    }

  }

}

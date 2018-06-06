import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';
import { PrincipalService } from '../auth/principal.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
        usernameCtrl: ['', Validators.compose([Validators.required])],
        passwordCtrl: ['', Validators.compose([Validators.required])]
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

}

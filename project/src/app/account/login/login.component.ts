import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';
import { PrincipalService } from '../auth/principal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  password: string;
  email: string;

  loading = false;

  constructor(private accountService: AccountService,
              private router: Router,
              private principalService: PrincipalService) {
  }

  ngOnInit() {
    this.logout();
  }

  login() {
    this.loading = true;
    this.accountService.login({email: this.email, password: this.password})
      .subscribe((resp) => {
        if (this.principalService.isAuthor()) {
          this.router.navigate(['/author']);
        }
        if (this.principalService.isEditor()) {
          this.router.navigate(['/editor']);
        }
        this.loading = false;
    });
  }

  logout() {
    this.accountService.logout();
  }

}

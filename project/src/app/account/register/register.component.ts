import { Component, OnInit } from '@angular/core';
import {AccountService} from '../account.service';
import {Router} from '@angular/router';
import {User} from '../../model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User;

  constructor(
    private accountService: AccountService,
    private router: Router) { }

  ngOnInit() {
    this.user = new User('', '', '', '', '');
  }

  register() {
    const radioRole: any = document.querySelector('input[name="radio-role"]:checked');
    console.log(radioRole.value);
    this.user.userType = radioRole.value;
    this.accountService.register(this.user)
      .subscribe(resp => {
        this.router.navigate(['/login']);
      });
  }

}

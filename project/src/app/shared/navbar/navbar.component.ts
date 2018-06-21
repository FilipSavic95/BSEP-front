import { Component, OnInit } from '@angular/core';
import {PrincipalService} from '../../account/auth/principal.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private principalService: PrincipalService) { }

  ngOnInit() {
  }


  isAdmin(): boolean {
    console.log('checking is admin');
    return this.principalService.isAdmin();
  }

  isOperator(): boolean {
    console.log('checking is operator');
    return this.principalService.isOperator();
  }


  isAuthenticated(): boolean {
    console.log('checking is authed');
    return this.principalService.isAuthenticated();
  }

}

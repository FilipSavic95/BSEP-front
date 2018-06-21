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
    return this.principalService.isAdmin();
  }

  isOperator(): boolean {
    return this.principalService.isOperator();
  }


  isAuthenticated(): boolean {
    return this.principalService.isAuthenticated();
  }

}

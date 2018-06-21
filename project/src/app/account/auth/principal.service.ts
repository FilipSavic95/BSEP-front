import { Injectable } from '@angular/core';
import {AuthServerProvider} from './auth-jwt.service';

@Injectable()
export class PrincipalService {

  authenticated = false;

  userIdentity: any;
  /** userIdentity example
   created:1518006964143
   exp:1518024964
   roles:Array(1)
     0:{authority: "ROLE_ADMIN"}
     length:1
   sub:"aa@aa.aa" */

  constructor(private authJwtService: AuthServerProvider) {
    this.authJwtService.getCurrentUser().subscribe(data => this.authenticate(data));
  }

  authenticate(identity) {
    this.userIdentity = identity;
    this.authenticated = identity !== null;
  }

  removeIdentity() {
    this.userIdentity = null;
    this.authenticated = false;
  }

  hasAuthority(authority: string): Promise<boolean> {
    return Promise.resolve(this.hasAuthorityDirect(authority));
  }

  hasAuthorityDirect(authority: string): boolean {
    if (!this.authenticated || !this.userIdentity || !this.userIdentity.roles) {
      return false;
    }
    if (authority === '') {
      return true;
    }
    return this.userIdentity.roles[0].authority === authority;
  }

  getIdentity(): any {
    return this.userIdentity;
  }

  isAuthenticated() {
    return this.authenticated;
  }

  isAdmin() {
    let asd: boolean;
    asd = this.hasAuthorityDirect('ROLE_ADMIN');
    if (asd) {
      console.log('it is admin');
      console.log(this.userIdentity);
    }
    return asd;
  }

  isOperator() {
    let asd: boolean;
    asd = this.hasAuthorityDirect('ROLE_OPERATOR');
    if (asd) {
      console.log('it is operator');
      console.log(this.userIdentity);
    }
    return asd;
  }

}

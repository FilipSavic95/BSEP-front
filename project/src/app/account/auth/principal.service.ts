import { Injectable } from '@angular/core';

@Injectable()
export class PrincipalService {

  authenticated = false;

  userIdentity: any;
  /** userIdentity example
   created:1518006964143
   exp:1518024964
   roles:Array(1)
     0:{authority: "ROLE_AUTHOR"}
     length:1
   sub:"aa@aa.aa" */

  constructor() {
  }

  authenticate(identity) {
    this.userIdentity = identity;
    this.authenticated = identity !== null;
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

  isAuthor() {
    let asd: boolean;
    asd = this.hasAuthorityDirect('ROLE_AUTHOR');
    if (asd) {
      console.log('it is author');
      console.log(this.userIdentity);
    }
    return asd;
  }

  isEditor() {
    let asd: boolean;
    asd = this.hasAuthorityDirect('ROLE_EDITOR');
    if (asd) {
      console.log('it is editor');
      console.log(this.userIdentity);
    }
    return asd;
  }

  isReviewer() {
    let asd: boolean;
    asd = this.hasAuthorityDirect('ROLE_REVIEWER');
    if (asd) {
      console.log('it is reviewer');
      console.log(this.userIdentity);
    }
    return asd;
  }

}

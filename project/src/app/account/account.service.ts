import {Injectable} from '@angular/core';
import {LocalStorageService} from 'ng2-webstorage';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {JWTUtilsService} from './auth/jwt-utils.service';
import {AuthServerProvider} from './auth/auth-jwt.service';
import {PrincipalService} from './auth/principal.service';

@Injectable()
export class AccountService {

  constructor(private http: HttpClient,
              private $localStorage: LocalStorageService,
              private jwtUtilsService: JWTUtilsService,
              private authServerProvider: AuthServerProvider,
              private principalService: PrincipalService) {
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred - Account Service', error);
    return Promise.resolve(error.message || error);
  }


  login(account) {
    return this.http.post('/api/users/login', account, {responseType: 'text'})
      .map(resp => {
          const accessToken = resp;
          this.authServerProvider.storeAuthenticationToken(accessToken);
          this.principalService.authenticate(this.jwtUtilsService.getDecodedData(accessToken));
        })
      .catch(this.handleError);
  }

  logout() {
    this.$localStorage.clear('authenticationToken');
    this.$localStorage.clear('user');
  }

  register(account) {
    return this.http.post('/api/users/registration', account, {responseType: 'text'});
  }

}

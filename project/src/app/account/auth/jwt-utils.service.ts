import {Injectable} from '@angular/core';

@Injectable()
export class JWTUtilsService {

  constructor() {
  }

  getDecodedData(token: string) {
    console.log('token');
    console.log(token);
    console.log('\n\n');
    const jwtData = token.split('.')[1];
    const decodedJwtJsonData = window.atob(jwtData);
    return JSON.parse(decodedJwtJsonData);
  }


}

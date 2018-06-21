import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ProfileService {

  constructor(private http: HttpClient) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred - Profile Service', error);
    return Promise.resolve(error.message || error);
  }


  getAdminsPage() {
    return this.http.get('/api/test-admin', {responseType: 'text'})
      .catch(this.handleError);
  }

  getOperatorsPage() {
    return this.http.get('/api/test-operator', {responseType: 'text'})
      .catch(this.handleError);
  }

}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ProfileService {

  constructor(private http: HttpClient) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred - Profile Service', error);
    return Promise.resolve(error.message || error);
  }


  getAuthorsPage() {
    return this.http.get('/api/author', {responseType: 'text'})
      .catch(this.handleError);
  }

  getEditorsPage() {
    return this.http.get('/api/editor', {responseType: 'text'})
      .catch(this.handleError);
  }

}

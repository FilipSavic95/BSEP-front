import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class AuthorService {

  constructor(private http: HttpClient) { }


  submitPaperAndLetter(paperSubmission) {
    return this.http.post('/api/paper-submissions', paperSubmission);
  }
}

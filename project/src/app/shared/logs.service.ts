import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Page} from '../model/Page';

@Injectable()
export class LogsService {

  constructor(private http: HttpClient) { }


  getLogs(page: number, size: number) {
    return this.http.get(`/api/logs/all?page=${page}&size=${size}`)
      .map(resp => {
        console.log(resp);
        return resp as Page;
      })
      .catch(this.handleError);
  }

  searchLogs(searchCriteria, page: number, size: number) {
    return this.http.get(`/api/logs/search-by-text?page=${page}&size=${size}&searchCriteria=${searchCriteria}`)
      .map(resp => {
        console.log(resp);
        return resp as Page;
      })
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred - Account Service', error);
    return Promise.reject(error);
  }

}

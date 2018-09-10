import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ReportsService {

  constructor(private http: HttpClient) { }


  generateReport(date1: string, date2: string, timeReference: string) {
    return this.http.get(`/api/reports/generate?date1=${date1}&date2=${date2}&timeReference=${timeReference}`)
      .map(resp => {
        console.log(resp);
        return resp;
      })
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred - Account Service', error);
    return Promise.reject(error);
  }

}

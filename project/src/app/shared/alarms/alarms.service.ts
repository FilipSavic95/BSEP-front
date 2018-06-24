import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Page} from '../../model/Page';

@Injectable()
export class AlarmsService {

  constructor(private http: HttpClient) { }

  getAlarmRules(page: number, size: number) {
    return this.http.get(`/api/alarms?page=${page}&size=${size}`)
      .map(resp => {
        console.log(resp);
        return resp as Page;
      })
      .catch(this.handleError);
  }

  getAlarmRule(alarmRuleName: string) {
    return this.http.get(`/api/alarms/${alarmRuleName}`)
      .map(resp => {
        console.log(resp);
        return resp as Page;
      })
      .catch(this.handleError);
  }

  getFiredAlarms(page: number, size: number) {
    return this.http.get(`/api/fired-alarms?page=${page}&size=${size}`)
      .map(resp => {
        console.log(resp);
        return resp as Page;
      })
      .catch(this.handleError);
  }

  edit(editedAlarm) {
    return this.http.put(`/api/alarms?alarmName=${editedAlarm.name}`, editedAlarm)
      .map(resp => {
        console.log(resp);
        return resp as string;
      })
      .catch(this.handleError);
  }

  delete(alarmName: string) {
    return this.http.delete(`/api/alarms?alarmName=${alarmName}`)
      .map(resp => {
        console.log(resp);
        return resp as string;
      })
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred - Alarms Service', error);
    return Promise.reject(error);
  }

}

import { Component, OnInit } from '@angular/core';
import {Page} from '../../../model/Page';
import {AlarmsService} from '../alarms.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-alarm-rules',
  templateUrl: './alarm-rules.component.html',
  styleUrls: ['./alarm-rules.component.css']
})
export class AlarmRulesComponent implements OnInit {

  alarms: Page;

  page = 0;
  size = 8;

  loading: boolean;
  errorMessage = '';

  constructor(private alarmsService: AlarmsService,
              private router: Router) { }

  ngOnInit() {
    this.alarms = {content: [
      {content: 'asd content 1 1 1', name: '1 name 1'},
      {content: 'asd content 2 2 2', name: '2 name 2'},
      {content: 'asd content 3 3 3', name: '3 name 3'}
    ], totalPages: 3, first: true, last: false, size: 5, totalElements: 10, numberOfElements: 10};
    // this.getAlarms();
  }

  getAlarms() {
    this.loading = true;
    this.errorMessage = '';
    this.alarmsService.getAlarmRules(this.page, this.size)
      .subscribe(
        resp => {
          this.alarms = resp;
          // this.alarms.content.map(alarm => {
          //   if (alarm.date !== null) {
          //     alarm.date = alarm.date.split('T').join(' ');
          //   }
          // });
          this.loading = false;
        },
        err => {
          console.log(err);
          this.errorMessage = err.error.message;
          this.loading = false;
        }
      );
  }

  viewRule(name, mode) {
    console.log('\nview');
    console.log(name, mode);
    this.router.navigate([`alarm-rule/${name}/${mode}`]);
  }

  deleteRule(alarmName) {
    console.log('\ndelete');
    console.log(alarmName);
    this.alarmsService.delete(alarmName)
      .subscribe(
        resp => console.log(resp),
        err  => console.log(err)
      );
  }


  nextAlarmsPage() {
    this.page++;
    this.getAlarms();
  }

  previousAlarmsPage() {
    this.page--;
    this.getAlarms();
  }

}

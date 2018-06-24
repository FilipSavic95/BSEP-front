import { Component, OnInit } from '@angular/core';
import {Page} from '../../../model/Page';
import {AlarmsService} from '../alarms.service';

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

  constructor(private alarmsService: AlarmsService) { }

  ngOnInit() {
    this.getAlarms();
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


  nextAlarmsPage() {
    this.page++;
    this.getAlarms();
  }

  previousAlarmsPage() {
    this.page--;
    this.getAlarms();
  }

}

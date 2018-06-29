import { Component, OnInit } from '@angular/core';
import {AlarmsService} from '../alarms.service';
import {Page} from '../../../model/Page';

@Component({
  selector: 'app-alarms-fired',
  templateUrl: './alarms-fired.component.html',
  styleUrls: ['./alarms-fired.component.css']
})
export class AlarmsFiredComponent implements OnInit {

  alarms = {content: []};

  page = 0;
  size = 10;

  loading = true;
  errorMessage = '';

  constructor(private alarmsService: AlarmsService) { }

  ngOnInit() {
    // this.loading = false;
    // this.alarms.content = [{
    // id: 'id_1', severity: 'ERROR', macaddress: 'BA:32:32:ca:da:fq', dateTime: '05.05.2018. 22:23:00',
    //   service: 'teacher', text: 'text mnogo mnogo tekta bas ima dosta teksta ovdje'},
    //   {
    //     id: 'id_2', severity: 'CRITICAL', macaddress: 'BA:32:32:ca:da:fq', dateTime: '1234566537',
    //     service: 'teacher', text: 'text mnogo mnogo tekta bas ima dosta teksta ovdje'},
    // ];
    this.getAlarms();
  }


  getAlarms() {
    this.loading = true;
    this.errorMessage = '';
    this.alarmsService.getFiredAlarms(this.page, this.size)
      .subscribe(
        resp => {
          this.alarms = resp;
          this.alarms.content.map(x => {
            if (x.dateTime !== null) { x.dateTime = x.dateTime.split('T').join(' '); }
          });
          this.loading = false;
        },
        err => {
          console.log(err);
          this.loading = false;
        }
      );
  }


  nextPage() {
    this.page++;
    this.getAlarms();
  }

  previousPage() {
    this.page--;
    this.getAlarms();
  }
}

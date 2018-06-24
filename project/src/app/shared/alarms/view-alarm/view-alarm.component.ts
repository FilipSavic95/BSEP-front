import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AlarmsService} from '../alarms.service';

@Component({
  selector: 'app-view-alarm',
  templateUrl: './view-alarm.component.html',
  styleUrls: ['./view-alarm.component.css']
})
export class ViewAlarmComponent implements OnInit {

  constructor(private alarmService: AlarmsService,
              private activatedRoute: ActivatedRoute) { }

  mode: string;
  ruleName: string;

  errorMessage = '';

  ngOnInit() {
    this.ruleName = this.activatedRoute.snapshot.params['name'];
    this.getAlarm();
    this.mode = this.activatedRoute.snapshot.params['mode'];
  }

  getAlarm() {
    this.alarmService.getAlarmRule(this.ruleName)
      .subscribe(
        resp => console.log(resp),
        err  => console.log(err)
      );
  }
}

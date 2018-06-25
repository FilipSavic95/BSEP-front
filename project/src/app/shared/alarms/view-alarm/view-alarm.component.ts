import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AlarmsService} from '../alarms.service';
import {AlarmRule} from '../../../model/AlarmRule';
import {PrincipalService} from '../../../account/auth/principal.service';

@Component({
  selector: 'app-view-alarm',
  templateUrl: './view-alarm.component.html',
  styleUrls: ['./view-alarm.component.css']
})
export class ViewAlarmComponent implements OnInit {

  constructor(private alarmService: AlarmsService,
              private activatedRoute: ActivatedRoute,
              private principalService: PrincipalService) { }

  mode: string;
  ruleName: string;
  alarmRule: AlarmRule;

  loading = true;
  errorMessage = '';
  isAdmin = false;

  ngOnInit() {
    this.isAdmin = this.principalService.isAdmin();
    this.ruleName = this.activatedRoute.snapshot.params['name'];
    this.getAlarm();
    this.mode = this.activatedRoute.snapshot.params['mode'];
  }

  getAlarm() {
    this.alarmService.getAlarmRule(this.ruleName)
      .subscribe(
        resp => {
          console.log(resp);
          this.alarmRule = resp;
          this.loading = false;
        },
        err  => {
          console.log(err);
          this.errorMessage = err.message;
          this.loading = false;
        }
      );
  }

  view() {
    this.mode = 'view';
  }

  edit() {
    this.mode = 'edit';
  }

  submit() {
    if (this.mode === 'edit') {
      this.alarmService.updateAlarmRule(this.alarmRule)
        .subscribe(
          resp => {
            console.log(resp);
            this.loading = false;
          },
          err  => {
            console.log(err);
            this.loading = false;
          }
        );
    }
  }
}

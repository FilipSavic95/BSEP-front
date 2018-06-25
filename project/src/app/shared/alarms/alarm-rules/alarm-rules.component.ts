import { Component, OnInit } from '@angular/core';
import {Page} from '../../../model/Page';
import {AlarmsService} from '../alarms.service';
import {Router} from '@angular/router';
import {PrincipalService} from '../../../account/auth/principal.service';

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
  isAdmin = false;

  constructor(private alarmsService: AlarmsService,
              private router: Router,
              private principalService: PrincipalService) { }

  ngOnInit() {
    this.isAdmin = this.principalService.isAdmin();
    // this.alarms = {content: [
    //   {name: 'collect logs'},
    //   {name: 'test rule engine'},
    //   {name: 'any warning'}
    // ], totalPages: 3, first: true, last: false, size: 5, totalElements: 10, numberOfElements: 10};
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

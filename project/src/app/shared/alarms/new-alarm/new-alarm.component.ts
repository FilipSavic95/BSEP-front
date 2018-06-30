import { Component, OnInit } from '@angular/core';
import {AlarmsService} from '../alarms.service';
import {AlarmRule} from '../../../model/AlarmRule';

@Component({
  selector: 'app-new-alarm',
  templateUrl: './new-alarm.component.html',
  styleUrls: ['./new-alarm.component.css']
})
export class NewAlarmComponent implements OnInit {

  newAlarmRule: AlarmRule = {name: '', content: ''};

  private ruleFileHeader = 'package drools.spring.rules;\ndialect  \"mvel\"\n\nimport ftn.bsep9.model.Log;\n';
  responseMessage = '';
  error = false;
  loading = false;

  placeholder = `rule "placeholder rule name"
    when
    then
        System.out.println("RULE ENGINE WORKING! (empty \"when\" part)");
end
`;

  constructor(private alarmsService: AlarmsService) { }

  ngOnInit() {
  }

  submitNewRule() {
    this.loading = true;
    this.newAlarmRule.content = this.ruleFileHeader + this.newAlarmRule.content;
    console.log(this.newAlarmRule);
    this.alarmsService.createAlarmRule(this.newAlarmRule)
      .subscribe(
        resp => {
          console.log(resp);
          this.error = false;
          this.responseMessage = resp;
          this.loading = false;
          this.newAlarmRule = {name: '', content: ''};
        },
        err => {
          console.log(err);
          this.error = true;
          this.responseMessage = err.message;
          this.loading = false;
        }
      );
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { NewAlarmComponent } from './new-alarm/new-alarm.component';
import {AlarmRulesComponent} from './alarm-rules/alarm-rules.component';
import {AlarmsFiredComponent} from './alarms-fired/alarms-fired.component';
import {AlarmsService} from './alarms.service';
import { ViewAlarmComponent } from './view-alarm/view-alarm.component';
import {AppRoutingModule} from '../../app-routing.module';

@NgModule({
  imports: [
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    AlarmRulesComponent,
    AlarmsFiredComponent,
    NewAlarmComponent,
    ViewAlarmComponent
  ],
  providers: [AlarmsService]
})
export class AlarmsModule { }

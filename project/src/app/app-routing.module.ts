import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './account/login/login.component';
import {NewPasswordComponent} from './account/new-password/new-password.component';
import {LogsListComponent} from './shared/logs-list/logs-list.component';
import {UserRouteAccessService} from './account/auth/user-route-access.service';
import {AlarmsFiredComponent} from './shared/alarms/alarms-fired/alarms-fired.component';
import {AlarmRulesComponent} from './shared/alarms/alarm-rules/alarm-rules.component';
import {NewAlarmComponent} from './shared/alarms/new-alarm/new-alarm.component';
import {ViewAlarmComponent} from './shared/alarms/view-alarm/view-alarm.component';
import {ReportsComponent} from './shared/reports/reports.component';

const appRoutes: Routes = [

  { path: 'add-alarm', component: NewAlarmComponent,
    data: {authority: 'ADMIN'},
    canActivate: [UserRouteAccessService] },
  { path: 'alarm-rule/:name/:mode', component: ViewAlarmComponent },
  { path: 'alarm-rules', component: AlarmRulesComponent },
  { path: 'change-password', component: NewPasswordComponent },
  { path: 'fired-alarms', component: AlarmsFiredComponent,
    data: {authority: 'ADMIN'},
    canActivate: [UserRouteAccessService] },
  { path: 'login', component: LoginComponent },
  { path: 'logs', component: LogsListComponent },
  { path: 'reports', component: ReportsComponent,
    data: {authority: 'ADMIN'},
    canActivate: [UserRouteAccessService] },
  // otherwise redirect to home
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: [UserRouteAccessService]
})
export class AppRoutingModule {

}

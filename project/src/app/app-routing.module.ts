import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './account/login/login.component';
import {NewPasswordComponent} from './account/new-password/new-password.component';
import {LogsListComponent} from './shared/logs-list/logs-list.component';
import {UserRouteAccessService} from './account/auth/user-route-access.service';
import {AlarmsFiredComponent} from './shared/alarms/alarms-fired/alarms-fired.component';
import {AlarmRulesComponent} from './shared/alarms/alarm-rules/alarm-rules.component';
import {NewAlarmComponent} from './shared/alarms/new-alarm/new-alarm.component';

const appRoutes: Routes = [

  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'logs', component: LogsListComponent
  },
  {
    path: 'change-password', component: NewPasswordComponent
  },
  {
    path: 'fired-alarms', component: AlarmsFiredComponent,
    data: {authority: 'ADMIN'},
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'alarm-rules', component: AlarmRulesComponent
  },
  {
    path: 'add-alarm', component: NewAlarmComponent,
    data: {authority: 'ADMIN'},
    canActivate: [UserRouteAccessService]
  },
  // {
  //   path: 'home',
  //   component: AuthorProfile,
  //   data: {authority: 'ADMIN/OPERATOR'},
  //   canActivate: [UserRouteAccessService]
  // },
  // {
  //   path: '', redirectTo: '/ownerships', pathMatch: 'full'
  // }

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

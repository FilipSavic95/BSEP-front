import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './account/login/login.component';
import {NewPasswordComponent} from './account/new-password/new-password.component';
import {AdminProfileComponent} from './account/profiles/admin-profile/admin-profile.component';
import {OperatorProfileComponent} from './account/profiles/operator-profile/operator-profile.component';
import {LogsListComponent} from './shared/logs-list/logs-list.component';
import {UserRouteAccessService} from './account/auth/user-route-access.service';

const appRoutes: Routes = [

  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'admin', component: AdminProfileComponent,
    data: {authority: 'ADMIN'},
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'operator', component: OperatorProfileComponent,
    data: {authority: 'OPERATOR'},
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'logs', component: LogsListComponent
  },
  {
    path: 'change-password', component: NewPasswordComponent
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

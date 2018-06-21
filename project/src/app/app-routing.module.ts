import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './account/login/login.component';
import {SubmitPaperComponent} from './author/submit-paper/submit-paper.component';
import {NewPasswordComponent} from './account/new-password/new-password.component';
import {AdminProfileComponent} from './account/profiles/admin-profile/admin-profile.component';
import {OperatorProfileComponent} from './account/profiles/operator-profile/operator-profile.component';
import {LogsListComponent} from './shared/logs-list/logs-list.component';

const appRoutes: Routes = [

  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'admin', component: AdminProfileComponent
  },
  {
    path: 'operator', component: OperatorProfileComponent
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
  //   data: {authority: 'ROLE_AUTHOR'},
  //   canActivate: [UserRouteAccessService]
  // },
  // {
  //   path: '', redirectTo: '/ownerships', pathMatch: 'full'
  // }

  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

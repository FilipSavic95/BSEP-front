import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './account/login/login.component';
import {RegisterComponent} from './account/register/register.component';
import {UserRouteAccessService} from './account/auth/user-route-access.service';
import {AuthorProfileComponent} from './account/profiles/author-profile/author-profile.component';
import {EditorProfileComponent} from './account/profiles/editor-profile/editor-profile.component';
import {SubmitPaperComponent} from "./author/submit-paper/submit-paper.component";

const appRoutes: Routes = [

  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'author', component: AuthorProfileComponent
  },
  {
    path: 'editor', component: EditorProfileComponent
  },
  {
    path: 'submitPaper', component: SubmitPaperComponent
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
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

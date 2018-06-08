import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {LocalStorageService, SessionStorageService} from 'ng2-webstorage';

import {LoginComponent} from './login/login.component';

import {ServerURLInterceptor} from './auth/interceptor.service';
import {AccountService} from './account.service';
import {JWTUtilsService} from './auth/jwt-utils.service';
import {AuthServerProvider} from './auth/auth-jwt.service';
import {PrincipalService} from './auth/principal.service';
import { AuthorProfileComponent } from './profiles/author-profile/author-profile.component';
import { EditorProfileComponent } from './profiles/editor-profile/editor-profile.component';
import {ProfileService} from './profiles/profile.service';
import { NewPasswordComponent } from './new-password/new-password.component';

import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent, AuthorProfileComponent, EditorProfileComponent, NewPasswordComponent],
  providers: [
    AccountService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerURLInterceptor,
      multi: true
    },
    AuthServerProvider,
    JWTUtilsService,
    LocalStorageService,
    PrincipalService,
    ProfileService,
    SessionStorageService
  ]
})
export class AccountModule { }

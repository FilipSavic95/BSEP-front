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
import {ProfileService} from './profiles/profile.service';
import { NewPasswordComponent } from './new-password/new-password.component';

import {ReactiveFormsModule} from '@angular/forms';
import { AdminProfileComponent } from './profiles/admin-profile/admin-profile.component';
import { OperatorProfileComponent } from './profiles/operator-profile/operator-profile.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent, NewPasswordComponent, AdminProfileComponent, OperatorProfileComponent],
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

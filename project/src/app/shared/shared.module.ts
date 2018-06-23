import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from './pipes/pipes.module';
import { NavbarComponent } from './navbar/navbar.component';
import {LogsListComponent} from './logs-list/logs-list.component';
import { ToasterAlarmsComponent } from './toaster-alarms/toaster-alarms.component';
import {FormsModule} from '@angular/forms';
import {LogsService} from './logs.service';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    PipesModule
  ],
  exports: [ PipesModule, NavbarComponent, ToasterAlarmsComponent ],
  declarations: [NavbarComponent, LogsListComponent, ToasterAlarmsComponent], // imports/exports https://stackoverflow.com/a/41281872/4345461
  providers: [LogsService]
})
export class SharedModule { }

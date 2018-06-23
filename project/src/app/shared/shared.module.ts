import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from './pipes/pipes.module';
import { NavbarComponent } from './navbar/navbar.component';
import {LogsListComponent} from './logs-list/logs-list.component';
import { ToasterAlarmsComponent } from './toaster-alarms/toaster-alarms.component';

@NgModule({
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [ PipesModule, NavbarComponent, ToasterAlarmsComponent ],
  declarations: [NavbarComponent, LogsListComponent, ToasterAlarmsComponent] // imports and exports https://stackoverflow.com/a/41281872/4345461
})
export class SharedModule { }

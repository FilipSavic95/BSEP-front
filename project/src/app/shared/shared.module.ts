import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from './pipes/pipes.module';
import { NavbarComponent } from './navbar/navbar.component';
import {LogsListComponent} from './logs-list/logs-list.component';

@NgModule({
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [ PipesModule, NavbarComponent ],
  declarations: [NavbarComponent, LogsListComponent] // imports and exports https://stackoverflow.com/a/41281872/4345461
})
export class SharedModule { }

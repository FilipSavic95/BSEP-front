import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from "./pipes/pipes.module";

@NgModule({
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [ PipesModule ] // imports and exports https://stackoverflow.com/a/41281872/4345461
})
export class SharedModule { }

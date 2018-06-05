import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeepHtmlPipe } from "./keep-html/keep-html.pipe";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ KeepHtmlPipe ],
  exports: [ KeepHtmlPipe ]
})
export class PipesModule { }

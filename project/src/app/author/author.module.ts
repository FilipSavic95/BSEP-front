import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitPaperComponent } from './submit-paper/submit-paper.component';
import {AuthorService} from './author.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [SubmitPaperComponent],
  providers: [AuthorService]
})
export class AuthorModule { }

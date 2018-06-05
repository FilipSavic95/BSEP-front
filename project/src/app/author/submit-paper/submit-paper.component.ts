import { Component, OnInit } from '@angular/core';
import {AuthorService} from '../author.service';

@Component({
  selector: 'app-submit-paper',
  templateUrl: './submit-paper.component.html',
  styleUrls: ['./submit-paper.component.css']
})
export class SubmitPaperComponent implements OnInit {

  paper: string;
  letter: string;

  constructor(private authorService: AuthorService) { }

  ngOnInit() {
  }

  submitPaperAndLetter() {
    this.authorService.submitPaperAndLetter({paper: this.paper, coverLetter: this.letter})
      .subscribe(
        (data) => console.log(data),
        (err) => console.log(err)); // Reach here if fails;

  }
}

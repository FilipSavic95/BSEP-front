import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../profile.service';


@Component({
  selector: 'app-author-profile',
  templateUrl: './author-profile.component.html',
  styleUrls: ['./author-profile.component.css']
})
export class AuthorProfileComponent implements OnInit {

  response: any;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
  }

  getResponse() {
    this.profileService.getAuthorsPage()
      .subscribe(resp => this.response = resp);
  }

}

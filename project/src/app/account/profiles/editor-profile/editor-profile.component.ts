import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../profile.service';

@Component({
  selector: 'app-editor-profile',
  templateUrl: './editor-profile.component.html',
  styleUrls: ['./editor-profile.component.css']
})
export class EditorProfileComponent implements OnInit {

  response: any;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {}


  getResponse() {
    this.profileService.getEditorsPage()
      .subscribe(resp => this.response = resp);
  }

}

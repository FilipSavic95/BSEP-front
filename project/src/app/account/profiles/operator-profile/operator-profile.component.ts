import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../profile.service';

@Component({
  selector: 'app-operator-profile',
  templateUrl: './operator-profile.component.html',
  styleUrls: ['./operator-profile.component.css']
})
export class OperatorProfileComponent implements OnInit {

  response: any;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
  }

  getResponse() {
    this.profileService.getOperatorsPage()
      .subscribe(resp => this.response = resp);
  }
}

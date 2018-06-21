import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../profile.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  response: any;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
  }

  getResponse() {
    this.profileService.getAdminsPage()
      .subscribe(resp => this.response = resp);
  }

}

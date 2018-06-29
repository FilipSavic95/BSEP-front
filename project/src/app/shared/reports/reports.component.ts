import { Component, OnInit } from '@angular/core';
import {ReportsService} from '../reports.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  before = false;
  after = false;
  between = false;

  date1 = '2018-05-07T01:22';
  date2 = '2018-05-22T11:11';
  timeReference: string;

  alarmsPerMachine: [];
  alarmsPerService: [];
  logsPerMachine: [];
  logsPerService: [];

  reportGenerated = false;
  loading = false;

  constructor(private reportsService: ReportsService) { }

  ngOnInit() {
  }

  generateReport() {
    this.loading = true;
    console.log('asd');
    console.log(this.date1);
    console.log(this.date2);
    this.reportsService.generateReport(this.date1, this.date2, this.timeReference)
      .subscribe(
        resp => {
          this.alarmsPerMachine = resp.alarmsPerMachine;
          this.alarmsPerService = resp.alarmsPerService;
          this.logsPerMachine = resp.logsPerMachine;
          this.logsPerService = resp.logsPerService;
          this.reportGenerated = true;
          this.loading = false;
        },
        err  => {

        }
      );
  }


  showBefore() {
    this.before = true;
    this.after = false;
    this.between = false;
    this.timeReference = 'before';
  }

  showAfter() {
    this.before = false;
    this.after = true;
    this.between = false;
    this.timeReference = 'after';
  }

  showBetween() {
    this.before = false;
    this.after = false;
    this.between = true;
    this.timeReference = 'between';
  }
}

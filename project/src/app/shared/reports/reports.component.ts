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

  date1 = '2018-06-29T05:22';
  date2 = '2018-06-29T10:11';
  timeReference: string;

  alarmsPerMachine = [];
  alarmsPerService = [];
  logsPerMachine = [];
  logsPerService = [];

  reportGenerated = false;
  loading = false;

  searchTime = 0;

  constructor(private reportsService: ReportsService) { }

  ngOnInit() {
    console.log('REPORS INIT');
  }

  generateReport() {
    this.loading = true;
    console.log('asd');
    console.log(this.date1);
    console.log(this.date2);

    const start = new Date().getTime();
    this.reportsService.generateReport(this.date1, this.date2, this.timeReference)
      .subscribe(
        resp => {
          this.alarmsPerMachine = resp.alarmsPerMachine;
          this.alarmsPerService = resp.alarmsPerService;
          this.logsPerMachine = resp.logsPerMachine;
          this.logsPerService = resp.logsPerService;
          this.reportGenerated = true;
          this.loading = false;
          const end = new Date().getTime();
          this.searchTime = end - start;
          console.log(this.searchTime);
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

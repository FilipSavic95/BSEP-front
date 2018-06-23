import {Component, OnInit} from '@angular/core';
import {Page} from '../../model/Page';
import {LogsService} from '../logs.service';

@Component({
  selector: 'app-logs-list',
  templateUrl: './logs-list.component.html',
  styleUrls: ['./logs-list.component.css']
})
export class LogsListComponent implements OnInit {

  logs: Page;

  page = 0;
  size = 8;

  searchCriteria: string;
  loading: boolean;
  errorMessage = '';

  searchDone = false;

  constructor(private logsService: LogsService) { }

  ngOnInit() {
    this.getLogs();
  }

  searchLogs() {
    this.loading = true;
    this.searchDone = true;
    this.errorMessage = '';
    console.log(this.searchCriteria);
    this.logsService.searchLogs(this.searchCriteria, this.page, this.size)
      .subscribe(
        resp => {
          console.log('\nconsole.log(resp);');
          console.log(resp);
          this.logs = resp;
          this.loading = false;
        },
        err => {
          console.log('\nconsole.log(err);');
          console.log(err);
          this.errorMessage = err.error;
          this.logs = null;
          this.loading = false;
        }
      );
  }


  getLogs() {
    this.loading = true;
    this.searchDone = false;
    this.searchCriteria = '';
    this.errorMessage = '';
    this.logsService.getLogs(this.page, this.size)
      .subscribe(
        resp => {
          this.logs = resp;
          this.logs.content.map(x => {
            if (x.date !== null) {
              x.date = x.date.split('T').join(' ');
            }
            // samo za test --- ukloniti u produkciji
            if (x.id === '5af0dfb455b9f02858a61b07') {
              x.severityType = 'ERROR';
            }
            if (x.id === '5af0dfc155b9f02858a61b08') {
              x.severityType = 'WARNING';
            }
            if (x.id === '5af0dfd455b9f02858a61b09') {
              x.severityType = 'CRITICAL';
            }
            });
          this.loading = false;
        },
          err => {
            console.log(err);
            this.loading = false;
          }
      );
  }


  nextSearchPage() {
    this.page++;
    this.searchLogs();
  }

  previousSearchPage() {
    this.page--;
    this.searchLogs();
  }

  nextLogsPage() {
    this.page++;
    this.getLogs();
  }

  previousLogsPage() {
    this.page--;
    this.getLogs();
  }
}

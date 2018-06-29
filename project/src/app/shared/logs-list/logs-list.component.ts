import {Component, OnDestroy, OnInit} from '@angular/core';
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
  show = false;
  modalBodyLog = {};
  modalClass = '';
  // intervalVar = null;

  searchTime = 0;

  constructor(private logsService: LogsService) { }

  ngOnInit() {
    // this.intervalVar = setInterval(() => {this.getLogs(); console.log('2 seconds gone')}, 2000);
    this.getLogs();
  }

  // ngOnDestroy() {
  //   clearInterval(this.intervalVar);
  //   console.log('destroying');
  // }

  searchLogs() {
    this.loading = true;
    this.searchDone = true;
    this.errorMessage = '';

    const start = new Date().getTime();
    console.log(this.searchCriteria);
    this.logsService.searchLogs(this.searchCriteria, this.page, this.size)
      .subscribe(
        resp => {
          console.log('\nconsole.log(resp);');
          console.log(resp);
          this.logs = resp;
          this.loading = false;
          const end = new Date().getTime();
          this.searchTime = end - start;
          console.log(this.searchTime);
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

  searchLogsBeginning() {
    this.page = 0;
    this.searchLogs();
  }

  getLogsBeginning() {
    this.page = 0;
    this.searchCriteria = '';
    this.getLogs();
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

  reveal(log) {
    switch (log.severityType) {
      case 'ERROR':
        this.modalClass = 'modal-danger';
        break;
      case 'WARNING':
        this.modalClass = 'modal-warning';
        break;
      case 'CRITICAL':
        this.modalClass = 'modal-critical';
        break;
      default:
        this.modalClass = 'modal-success';
    }
    this.modalBodyLog = log;
    this.show = true;
  }

  hide() {
    this.show = false;
  }

}

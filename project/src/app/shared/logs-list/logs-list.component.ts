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
  size = 4;

  searchCriteria: string;
  loading = true;

  constructor(private logsService: LogsService) { }

  ngOnInit() {
    this.getLogs();
  }

  searchLogs() {
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
          console.log(err);
          this.loading = false;
        }
      );
  }


  getLogs() {
    this.logsService.getLogs(this.page, this.size)
      .subscribe(
        resp => {
          this.logs = resp;
          this.loading = false;

//        logsPage.getSize()              2
//        logsPage.getNumberOfElements()  2
//        logsPage.getNumber()            0
//        logsPage.getTotalElements()     5
//        logsPage.getTotalPages());      3
//        logsPage.getContent());
//        [Log{id='5af0dfb455b9f02858a61b07', ...
//        logsPage.getPageable());                   Page request [number: 0, size 2, sort: UNSORTED]
//        logsPage.getPageable().getOffset());       0
//        logsPage.getPageable().getPageNumber());   0
//        logsPage.getPageable().getPageSize());     2
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

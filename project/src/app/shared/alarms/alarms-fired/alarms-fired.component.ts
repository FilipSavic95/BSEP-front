import { Component, OnInit } from '@angular/core';
import { AlarmsService } from '../alarms.service';

@Component({
  selector: 'app-alarms-fired',
  templateUrl: './alarms-fired.component.html',
  styleUrls: ['./alarms-fired.component.css']
})
export class AlarmsFiredComponent implements OnInit {

  constructor(private alarmsService: AlarmsService) { }

    page = 0;
    size = 15;
    firedAlarms = [];
    totalPages = 1;

  ngOnInit() {
    this.getFiredAlarms(true);
  }

    getFiredAlarms(firstCall) {
        this.alarmsService.getFiredAlarms(this.page, this.size, 'desc')
            .subscribe(
                resp => {
                    console.log(resp);
                    this.firedAlarms = resp.content;
                    if (firstCall) {
                        this.totalPages = resp.totalPages;
                    }
                }
                ,
                err  => console.log(err)
            );
    }

    nextPage() {
        this.page = this.page + 1;
        this.getFiredAlarms(false);
    }

    previousPage() {
        this.page = this.page - 1;
        this.getFiredAlarms(false);    
    }
}

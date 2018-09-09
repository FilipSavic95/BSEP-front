import { Component, OnInit } from '@angular/core';

import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

export class Message {
  date: string;
  content: string;
  level: string;

  constructor(date, content, style?) {
    this.date = date;
    this.content = content;
    this.level = style || 'info';
  }
}

@Component({
  selector: 'app-toaster-alarms',
  templateUrl: './toaster-alarms.component.html',
  styleUrls: ['./toaster-alarms.component.css']
})
export class ToasterAlarmsComponent implements OnInit {

  private serverUrl = 'https://172.20.10.4:8765/socket'
  private stompClient;

  messages: Message[] = [
    {'date': '23:59:59', 'content': 'Notifications show up here', 'level': 'info'}
  ];

  constructor() {
    this.initializeWebSocketConnection();
  }

  ngOnInit() { }

  initializeWebSocketConnection() {
    const ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    this.stompClient.connect({}, () => {
      this.stompClient.subscribe('/chat', (message) => {
        if (message.body) {
          const msg = JSON.parse(message.body);
          this.messages.push(msg);
        }
      });
    });
  }

  dismiss(index: number) {
    this.messages.splice(index, 1);
  }

}

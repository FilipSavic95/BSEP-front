import { Component, OnInit } from '@angular/core';

import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import * as $ from 'jquery';

export class Message {
  date: string;
  content: string;
  level: string;
  // dismissed = false;

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
  private serverUrl = 'https://localhost:8765/socket';
  private stompClient;

  messages: Message[] = [{'date': '17:05:06', 'content': '44444444444444', 'level': 'danger'}];

  constructor() {
    console.log('\ntoaster constructor\n');
    this.initializeWebSocketConnection();
  }

  ngOnInit() {
    console.log('toaster initialized!');
  }

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

  dismiss(date: string) {
    console.log('removing message arrived at: ' + date);
    this.messages = this.messages.filter(m => m.date !== date);
  }

  sendMessage(message) {
    this.stompClient.send('/app/send/message' , {}, message);
    $('#input').val('');
  }

}

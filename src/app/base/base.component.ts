import { Component, OnInit } from '@angular/core';
import { MessageHistoryService } from '../@core/services/message-history.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent implements OnInit {
  public collapse: boolean = false;
  public collapsed: boolean = true;

  public messageHistory: any[] = [];
  constructor(private messageService: MessageHistoryService) {}
  ngOnInit(): void {
    this.messageService.message$.subscribe((item:any) => {
      this.messageHistory.push(item[0]);
    });
  }

  toggleSidebar() {
    this.collapsed = !this.collapsed;
  }
  toggleSidebarOpen() {
    this.collapsed = true;
  }
  toggleSidebarOff() {
    this.collapsed = false;
  }
  clearMessageList() {
    this.messageHistory = []
  }
  newMessage() {
    this.messageService.newMessage();
  }
}

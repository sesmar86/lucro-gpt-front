import { Component, OnInit } from '@angular/core';
import { MessageHistoryService } from '../@core/services/message-history.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit{

  public collapse: boolean = false;
  public collapsed: boolean = true

  public messageHistory!:Observable<any[]> 
  constructor(
    private messageService:MessageHistoryService
    ){
      
    }
  ngOnInit(): void {
    this.messageHistory = this.messageService.message$
  }

  toggleSidebar() {
    this.collapsed = !this.collapsed
  }
  toggleSidebarOpen() {
    this.collapsed = true
  }
  toggleSidebarOff() {
    this.collapsed = false
  }
}

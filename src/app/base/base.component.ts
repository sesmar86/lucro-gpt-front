import { Component } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent {

  public collapse: boolean = false;
  public collapsed: boolean = true


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

import { Injectable } from '@angular/core';
import { BehaviorSubject,Subject } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class MessageHistoryService {
  public message!: any[]
  public messageClear!: any[]
  public message$ = new Subject<any[]>()
  public messageC$ = new Subject<any[]>()
  constructor() { }

  get messageGet() {
    return this.message$.asObservable();
  }

  setMessage(message: any[]) {
    this.message$.next(message)
  }

  newMessage() {
    this.messageC$.next(this.messageClear)
  }
  setViewMessage(data:any) {
    this.messageC$.next(data)
  }
}

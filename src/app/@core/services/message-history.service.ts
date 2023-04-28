import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class MessageHistoryService {
  public message!: any[]
  public messageClear!: any[]
  public message$ = new BehaviorSubject<any[]>(this.message)
  public messageC$ = new BehaviorSubject<any[]>(this.messageClear)
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
}

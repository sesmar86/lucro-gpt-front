import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class MessageHistoryService {
  public message!: any []
  public message$ = new BehaviorSubject<any[]>(this.message)
  constructor() { }

  get messageGet(){
    return this.message$.asObservable();
  }

  setMessage(message:any[]){
    this.message$.next(message)
  }
}

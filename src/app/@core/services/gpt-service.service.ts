import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GptServiceService {

  constructor(
    private http:HttpClient
  ) { }

  postMessage(data:any){
    return this.http.post<any>('https://api-gpt.lucro-app.com', data)
  }
}

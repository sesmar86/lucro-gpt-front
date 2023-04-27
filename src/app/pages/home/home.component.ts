import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { GptServiceService } from 'src/app/@core/services/gpt-service.service';
import { MessageHistoryService } from 'src/app/@core/services/message-history.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public formSearch!: FormGroup
  public messageList: any[] = []
  public messageResponseRobot: any[] = []
  constructor(
    private formBuilder: FormBuilder,
    private messageService:MessageHistoryService,
    private gptService:GptServiceService
  ) {
    this.formSearch = this.formBuilder.group({
      inputSearch: ['']
    })
  }
  ngOnInit(): void {

  }

  sendForm(form: FormGroup) {
    this.messageList.push({
      message: form.value.inputSearch
    })
    this.messageService.setMessage(this.messageList)
    this.sendChat(form.value.inputSearch)
  }
  sendChat(message:string) {
    const send = {
      message: message
    }
  //  this.gptService.postMessage(send).subscribe(_resp => {
  //   console.log(_resp)
  //  })
    this.messageResponseRobot.push({
      message: message
    })

  }
}

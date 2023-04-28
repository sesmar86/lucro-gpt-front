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
  public loading: boolean = true
  public modal: boolean = false
  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageHistoryService,
    private gptService: GptServiceService
  ) {
    this.formSearch = this.formBuilder.group({
      inputSearch: ['']
    })
  }
  ngOnInit(): void {
    this.messageService.messageC$.subscribe(item => {
      if (!item) {
        this.messageList = []
        this.loading = true
      }else{
        this.messageList = []
        this.messageList.push(item)
        this.loading = false
      }
   
    })
  }

  sendForm(form: FormGroup) {
    this.messageList.push({
      user: true,
      robot:false,
      response:'',
      message: form.value.inputSearch
    })

    const send = {
      message: form.value.inputSearch
    }

    this.gptService.postMessage(send).subscribe(_resp => {
      this.loading = false
      this.messageList[0].robot = true
      this.messageList[0].response = _resp.answer
      this.messageService.setMessage(this.messageList)
    })

    this.formSearch.reset()
  }

  open(){
    this.modal = true
  }
  close(){
    this.modal = false
  }
}

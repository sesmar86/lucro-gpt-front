import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public formSearch!: FormGroup
  public messageList: any[] = []
  constructor(
    private formBuilder: FormBuilder
  ) {
    this.formSearch = this.formBuilder.group({
      inputSearch: ['']
    })
  }
  ngOnInit(): void {

  }

  sendForm(form: FormGroup) {
    this.messageList.push({
      user: 'Username',
      message: form.value.inputSearch
    })

  }
}

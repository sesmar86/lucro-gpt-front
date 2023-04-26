import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from "./base.component";
import { BaseRoutingModule } from "./base-routing.module";

@NgModule({
  declarations: [BaseComponent],
  imports: [
    CommonModule,
    BaseRoutingModule
  ]
})
export class BaseModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalRowComponent } from './modal-row.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ModalRowComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ModalRowComponent
  ]
})
export class ModalRowModule { }

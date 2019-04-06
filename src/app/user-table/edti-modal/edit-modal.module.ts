import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditModalComponent } from './edit-modal.component';
import {FormsModule} from '@angular/forms';
import {ModalRowModule} from './modal-row/modal-row.module';
import {ModalHeaderModule} from './modal-header/modal-header.module';

@NgModule({
  declarations: [
    EditModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ModalRowModule,
    ModalHeaderModule
  ],
  exports: [
    EditModalComponent
  ]
})
export class EditModalModule { }

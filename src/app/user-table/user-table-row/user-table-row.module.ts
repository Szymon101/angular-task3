import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTableRowComponent } from './user-table-row.component';

@NgModule({
  declarations: [
    UserTableRowComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserTableRowComponent
  ]
})
export class UserTableRowModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTableHeaderComponent } from './user-table-header.component';

@NgModule({
  declarations: [
    UserTableHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserTableHeaderComponent
  ]
})
export class UserTableHeaderModule { }

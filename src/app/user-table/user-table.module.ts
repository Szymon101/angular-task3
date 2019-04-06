import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTableComponent } from './user-table.component';
import {UserService} from '../shared/service/user.service';
import {HttpClientModule} from '@angular/common/http';
import {UserTableRowModule} from './user-table-row/user-table-row.module';
import {UserTableHeaderModule} from './user-table-header/user-table-header.module';
import {EditModalModule} from './edti-modal/edit-modal.module';

@NgModule({
  declarations: [
    UserTableComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    UserTableRowModule,
    UserTableHeaderModule,
    EditModalModule
  ],
  exports: [
    UserTableComponent
  ],
  providers: [
    UserService
  ]
})
export class UserTableModule { }

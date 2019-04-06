import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserModel} from '../../shared/model/user.model';

@Component({
  selector: 'app-user-table-header',
  templateUrl: './user-table-header.component.html',
  styleUrls: ['./user-table-header.component.css']
})
export class UserTableHeaderComponent implements OnInit {

  @Input('selectedUserList') selectedUserList: UserModel[] = [];
  @Output('usersToEdit') usersToEdit = new EventEmitter<UserModel[]>();
  constructor() { }

  ngOnInit() {
  }

  onEditUsersClick() {
    let userList: UserModel[] = this.selectedUserList;
    this.usersToEdit.emit(userList);
  }
}

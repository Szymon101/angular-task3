import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserModel} from '../../shared/model/user.model';

@Component({
  selector: 'app-user-table-row',
  templateUrl: './user-table-row.component.html',
  styleUrls: ['./user-table-row.component.css']
})
export class UserTableRowComponent implements OnInit {
  @Input('user') user: UserModel;
  @Output('userToEdit') userToEdit = new EventEmitter<UserModel[]>();
  @Output('userToDelete') userToDelete = new EventEmitter<UserModel>();
  constructor() { }

  ngOnInit() {
  }

  onCheckboxChange() {
    this.user.isSelected = !this.user.isSelected;
  }

  onEditUserClick() {
    let userList: UserModel[] = [];
    userList.push(this.user);
    this.userToEdit.emit(userList);
  }

  onDeleteUserClick(user: UserModel) {
    this.userToDelete.emit(user);
  }

}

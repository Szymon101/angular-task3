import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/service/user.service';
import {UserModel} from '../shared/model/user.model';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  constructor(private userService: UserService) { }
  userList: UserModel[];
  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers("123")
        .subscribe(success => {
          console.log(success);
          this.userList = success;
        }, error => {
          console.log(error);
        });
  }

  getSelectedUsers() {
    if(this.userList){
      return this.userList.filter(user=>user.isSelected);
    }
  }

  deleteUser(user: UserModel) {
    this.userList = this.userList.filter(value => value.id != user.id)
  }
}

import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserModel} from '../../shared/model/user.model';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {

  @ViewChild('editModal') editModal: ElementRef;
  userList: UserModel[] = [];
  constructor() { }

  ngOnInit() {
  }

  public openModal(userList: UserModel[]): void {
    this.userList = userList;
    this.editModal.nativeElement.classList.add('open-modal');
  }

  public closeModal(): void {
    this.editModal.nativeElement.classList.remove('open-modal');
  }

}

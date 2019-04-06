import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from '../../../shared/model/user.model';

@Component({
  selector: 'app-modal-row',
  templateUrl: './modal-row.component.html',
  styleUrls: ['./modal-row.component.css']
})
export class ModalRowComponent implements OnInit {

  @Input('user') user: UserModel;
  constructor() { }

  ngOnInit() {
  }

}

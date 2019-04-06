import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserModel} from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  url = 'http://localhost:3000';

  getUsers(authToken) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': authToken
    });
    return this.httpClient.get<UserModel[]>(this.url + '/user', {headers: headers})
  }
}

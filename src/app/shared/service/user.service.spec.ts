import {getTestBed, TestBed} from '@angular/core/testing';

import { UserService } from './user.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {UserModel} from '../model/user.model';

  describe('UserService', () => {

    let injector: TestBed;

    let myProvider: UserService;

    let httpMock: HttpTestingController;

    beforeEach(() => {

      TestBed.configureTestingModule({

        imports: [HttpClientTestingModule],

        providers: [UserService]

      });
      let testBed = getTestBed();

      myProvider = testBed.get(UserService);

      httpMock = testBed.get(HttpTestingController);

    });

    describe('getUsers', () => {

      it('should return an Observable<Product[]>', () => {

        const userList = [

          {
            "user": [
              {
                "id": 1,
                "name": "Anthony",
                "surname": "Stark",
                "birthday": "29-05-1970",
                "phone": "678-136-7091",
                "address": "Malibu Point 10880, 90265"
              },
              {
                "id": 2,
                "name": "Steven",
                "surname": "Rogers",
                "birthday": "04-07-1918",
                "phone": "678-136-7092",
                "address": "somewhere in Brooklyn"
              },
              {
                "id": 3,
                "name": "Peter",
                "surname": "Parker",
                "birthday": "10-08-2001",
                "phone": "678-136-7093",
                "address": "20 Ingram Street"
              }
            ]
          }
        ];

        myProvider.getUsers("123").subscribe((users) => {

          expect(users.length).toBe(3);

          expect(UserModel[3]).toEqual(userList);

        });


        const request = httpMock.expectOne(`${myProvider.url}/user`);
        httpMock.verify();

      });
    });
  });




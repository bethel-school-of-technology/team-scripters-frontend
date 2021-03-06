import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Shared/models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private myHttp: HttpClient) {}
  //insert address
  serverUserURL: string = 'http://localhost:5000/api/users';

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  //Function to make a server request to /api/users/register route
  //Type of request: POST

  //Change 'any' to the user model when available

  registerUser(newUser: User): Observable<any> {
    return this.myHttp.post(this.serverUserURL + '/register', newUser);
  }

  //Function to make a server request to api/users/login route
  //Type of request: POST
  //need to provide username and password as a JSON(Data needed from component)

  loginUser(username: string, password: string): Observable<any> {
    let loginInfo = {
      username,
      password
    }
    return this.myHttp.post(this.serverUserURL + "/login", loginInfo);
  }

  //Function to make a server request to /api/users/profile route
  //Type of request: GET
  //Need to provie an authorization header with a token from login

  getUserProfile(): Observable<any> {
    let myHeaders = {
      Authorization: localStorage.getItem('myAppToken'),
    };

    return this.myHttp.get(this.serverUserURL + '/profile', {
      headers: myHeaders,
    });
  }

  getUsers() {
    return this.myHttp.get(this.serverUserURL + '/search-users' );
  }

  //fix route below to get single user
  
  getSingleUser(id: string): Observable<any> {
    let URL = `${this.serverUserURL}/${id}`;
    return this.myHttp.get(URL)
  }

  //Function to make a server request to /api/users/editProfile route
  //Type of request: PUT
  //need to provide username and password

  updateUserProfile(id: any, data: any): Observable<any> {
    let userInfo = {
      id,
      data
    };
    return this.myHttp.put(this.serverUserURL + '/edit-profile', userInfo);
  }
  
  changePassword(data){
    var headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem('myAppToken'));
  
    var options =  {
        headers: headers
    };
    return this.myHttp.put('http://localhost:5000/api/edit-password',data, options)
  }

}



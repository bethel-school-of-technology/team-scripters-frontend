import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private myHttp: HttpClient) { }
  //insert address
  serverUserURL: string = "http://localhost:5000/api/users";

  //Function to make a server request to /api/users/register route
  //Type of REquest: POST
  //Need to provide new user data(Comes from component)

  //Change 'any' to the user model when available
  registerUser(newUser: User): Observable<any> {
    return this.myHttp.post(this.serverUserURL + "/signup", newUser);
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
      Authorization: localStorage.getItem("myAppToken")
    }

    return this.myHttp.get(this.serverUserURL + "/profile", { headers: myHeaders });
  }

}

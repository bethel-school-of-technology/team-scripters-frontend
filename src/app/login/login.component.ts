import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../models/login';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: Login = new Login();
  //better to use models of this loginform? more secure?
  // loginform = {
  //   username: "",
  //   pasword: ""
  // }

  constructor(private myUserService: UserService, private myRouter: Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log('Submit Successful: ', this.model);
    this.myUserService.loginUser(this.model.login, this.model.password).subscribe(myResponseObject => {
      console.log(myResponseObject);
      if (myResponseObject.status === 200){
        //successful login
        window.alert(myResponseObject.message);
        localStorage.setItem("myAppToken", myResponseObject.token);
        this.myRouter.navigate(["/profile"]);
      }else{
        //unsuccessful login
        window.alert(myResponseObject.message);
      }
    })
}

}


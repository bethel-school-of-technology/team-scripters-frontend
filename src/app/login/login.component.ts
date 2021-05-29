import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: Login = new Login();
  // loginform = {
  //   username: "",
  //   pasword: ""
  // }

  constructor(private myUserService: UserService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log('Submit Successful: ', this.model);
    this.myUserService.loginUser(this.model.login, this.model.password).subscribe(myResponseObject => {
      console.log(myResponseObject);
    })
}

}


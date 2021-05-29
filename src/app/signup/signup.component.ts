import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Signup } from '../models/signup';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  model: Signup = new Signup();

  constructor(private myUserService: UserService, private myRouter: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    // console.log('Successful signup', this.model);
    this.myUserService.registerUser(this.model).subscribe(myResponseObject => {
      console.log(myResponseObject);
      if(myResponseObject.status === 200){
        //successful Login
        window.alert(myResponseObject.message);
        localStorage.setItem("myAppToken", myResponseObject.token);
        this.myRouter.navigate(["/profile"]);
      } else{
        //Unsuccessful Login
        window.alert(myResponseObject.message);
      }
    })
  }

}

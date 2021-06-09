import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
// <<<<<<< frontend-funct
model: User = new User();

  constructor(private myUserService: UserService, private myRouter: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('Successful signup', this.model);
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

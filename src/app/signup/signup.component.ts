import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../models/signup';
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

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('Successful signup', this.model);
  }

//   //Need a model made of the User.
// //  newUser: User = new User();
//   constructor(private myUserService: UserService, private myRouter: Router) { }

//   ngOnInit(): void {
//   }
// // signup() {
// //   console.log(this.newUser);
// // }
// >>>>>>> frontend-dev
}

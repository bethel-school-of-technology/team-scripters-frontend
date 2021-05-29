import { Component, OnInit } from '@angular/core';
// <<<<<<< frontend-funct
import { Signup } from '../models/signup';
=======
// import { Router } from '@angular/router';
// import { UserService } from '../services/user.service';
// >>>>>>> frontend-dev

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
// <<<<<<< frontend-funct
  model: Signup = new Signup();

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('Successful signup', this.model);
  }
=======
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

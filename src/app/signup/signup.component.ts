import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  //Need a model made of the User.
 newUser: User = new User();
  constructor(private myUserService: UserService, private myRouter: Router) { }

  ngOnInit(): void {
  }
  signup() {
    console.log(this.newUser);
    this.myUserService.registerUser(this.newUser).subscribe(myResponseObject => {
      console.log(myResponseObject);
      if (myResponseObject.status === 200){
        //successful login
        window.alert(myResponseObject.message);
        localStorage.setItem("myAppToken", myResponseObject.token);
        this.myRouter.navigate(["/profile"]);
      } else{
        window.alert(myResponseObject.message);
      }
    })
}
}

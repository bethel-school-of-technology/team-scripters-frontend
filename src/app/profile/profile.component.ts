import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  currentUser: User = new User();

  constructor(private myUserService: UserService, private myRouter: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('myAppToken')) {
      window.alert('You Are NOT Logged In');
      this.myRouter.navigate(['/login']);
    } else {
      this.myUserService.getUserProfile().subscribe((myResponseObject) => {
        console.log(myResponseObject);
        this.currentUser = myResponseObject.user;
      });
    }
  }
}

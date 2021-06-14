import { Component, OnInit } from '@angular/core';
import { User } from '../../../Shared/models/user';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { PostsComponent } from '../../posts/posts/posts.component';

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.css'],
})
export class PublicProfileComponent implements OnInit {

  singleUser: User = new User();

  constructor(private myUserService: UserService, private myRouter: Router) {}

  ngOnInit(): void {

    this.myUserService.getUserProfile().subscribe(myResponseObject => {
      console.log(myResponseObject);
      this.singleUser = myResponseObject.user;
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})

export class ListUsersComponent implements OnInit {

  users: any = [];

constructor(private userService: UserService) { }

ngOnInit(): void {
  //on page load grab the users from the database
  this.userService.getUsers().subscribe(res => {
    console.log(res)
    this.users = res;
  });
}

}

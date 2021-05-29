import { Component, OnInit } from '@angular/core';
import { User } from '../models/signup';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: User = new User();

  constructor() { }

  ngOnInit(): void {
  }

}

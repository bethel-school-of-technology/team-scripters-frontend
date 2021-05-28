import { Component, OnInit } from '@angular/core';
import { Signup } from '../models/signup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  model: Signup = new Signup();

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('Successful signup', this.model);
  }
}

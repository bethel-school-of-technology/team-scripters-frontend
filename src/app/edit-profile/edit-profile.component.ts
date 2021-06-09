import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { User } from '../models/user';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  getId: any;
  updateForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
  });

  currentUser: User = new User();

  constructor(
    //public user: User[],
    private myUserService: UserService,
    private myRouter: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');

    this.myUserService.getUserProfile().subscribe((res) => {
      console.log(res)
      // this.updateForm.setValue({
        // firstName: res[''],
        // lastName: res[''],
        // email: res[''],
        // username: res[''],
        // password: res[''],
      // });
    });
  }

  ngOnInit(): void {}

  onUpdate(): any {
    // this.myUserService
      // .updateUserProfile(this.getId, this.updateForm.value)
      // .subscribe({
        // next: () => {
        // this.myRouter.navigate(['/profile', { relativeTo: this.route }]);
        // },
      // });


    console.log('Successful update', this.updateForm.value);

  }
}

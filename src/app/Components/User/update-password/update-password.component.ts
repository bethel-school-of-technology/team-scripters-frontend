import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, FormsModule, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/Shared/models/user';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {
  getId: any;

    passwordForm: FormGroup = new FormGroup({
      currentPassword: new FormControl(''),
      updatePassword: new FormControl(''),
      // confirmPassword: new FormControl('')
    });

  currentUser: User = new User();

  constructor(
    private myUserService: UserService,
    private myRouter: Router,
    public formBuilder: FormBuilder
  ) { 
    this.myUserService.getUserProfile().subscribe((res) => {
      console.log(res)
       this.passwordForm.setValue({
        password: res.user.password,
       });
       this.getId=res.user._id
       this.currentUser.password= res.user.password
    });
  }

  ngOnInit(): void {
  }

  onUpdate() {
    const {old_password, new_password} = this.passwordForm.value;
    this.myUserService
      .changePassword({old_password, new_password})
      .subscribe(() => console.log('Success!'), 
                 () => console.log('A problem occurred..'));
  }
}

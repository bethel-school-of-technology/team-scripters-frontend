import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../../../services/post.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

    postForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private myRouter: Router,
    private ngZone: NgZone,
    private postService: PostService
    ) {
      this.postForm = this.formBuilder.group({
        title: [''],
        body: ['']
      })
     }

  ngOnInit(): void {
  }

  //Function to create a new post and navigates to the profile page
    onSubmit(): any {
      console.log(this.postForm.value);
      this.postService.AddPost(this.postForm.value).subscribe(() => {
        console.log("Data added Successfully")
        this.ngZone.run(() => this.myRouter.navigateByUrl('/profile'))
      }, (err) => {
console.log(err);
      });
    }
}

import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from '../../../services/post.service';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-edit-posts',
  templateUrl: './edit-posts.component.html',
  styleUrls: ['./edit-posts.component.css']
})
export class EditPostsComponent implements OnInit {

    getId: any;
    updateForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private postService: PostService
  ) { 
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');

    this.postService.GetPost(this.getId).subscribe(res => {
      this.updateForm.setValue({
        title: res['title'],
        body: res['body']
      });
    });
    this.updateForm = this.formBuilder.group({
      title: [''],
      body: ['']
    })
  }

  ngOnInit(): void {}

  //Submits the edits to the database and returns you to the profile page
  onUpdate(): any {
    console.log(this.updateForm.value);
    this.postService.updatePost(this.getId, this.updateForm.value)
    .subscribe(() => {
        console.log('Data updated successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/profile'))
      }, (err) => {
        console.log(err);
    });
  }

}

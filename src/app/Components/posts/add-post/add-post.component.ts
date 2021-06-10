import { Component, EventEmitter, NgZone, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../../../services/post.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import {ModalDismissReasons, NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

    @Output() postSubmitted = new EventEmitter()
    postForm: FormGroup;
  closeModal: string;
  content:any;
  modalref:NgbModalRef;


  constructor(
    public formBuilder: FormBuilder,
    private myRouter: Router,
    private ngZone: NgZone,
    private postService: PostService,
    private modalService: NgbModal
    ) {
      this.postForm = this.formBuilder.group({
        title: [''],
        body: ['']
      })
     }

  ngOnInit(): void {
  }

  //Function to create a new post and navigates to the profile page
    onSubmit(content): any {
      console.log(this.postForm.value);
      this.postService.AddPost(this.postForm.value).subscribe(() => {
        console.log("Data added Successfully")
        this.postSubmitted.emit();
        // this.ngZone.run(() => this.myRouter.navigateByUrl('/profile'))
        // this.postForm.reset();
        // this.myRouter.navigate(['profile'])
        // window.location.reload();
      }, (err) => {
        console.log(err);
      });
    }
}

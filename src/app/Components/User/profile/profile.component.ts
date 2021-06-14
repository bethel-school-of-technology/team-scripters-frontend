import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../../Shared/models/user';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostsComponent } from '../../posts/posts/posts.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {

  @ViewChild(PostsComponent) child!: PostsComponent;
  currentUser: User = new User();

  constructor(
    private myUserService: UserService, 
    private myRouter: Router,
    private modalService: NgbModal,
    ) { }

  ngOnInit(): void {
    if(!localStorage.getItem("myAppToken")){
      window.alert("You Are NOT Logged In");
      this.myRouter.navigate(["/login"]);
    }else{
      this.myUserService.getUserProfile().subscribe(myResponseObject => {
        console.log(myResponseObject);
        this.currentUser = myResponseObject.user;
      })
    }
  }


  //function to open the modal 'create post'
  triggerModal(content) {
     this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
  }

  // function to close the modal 'create post' and run the PostsComponents ngONInit to refresh the page
  closeModal(){
    this.modalService.dismissAll();
    this.child.ngOnInit();
  }
}

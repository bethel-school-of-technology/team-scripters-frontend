import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../../Shared/models/user';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import {ModalDismissReasons, NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { PostsComponent } from '../../posts/posts/posts.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @ViewChild(PostsComponent) child!: PostsComponent;
  currentUser: User = new User();
  ngbModalRef: NgbModalRef;

  constructor(
    private myUserService: UserService, 
    private myRouter: Router,
    private modalService: NgbModal
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

  triggerModal(content) {
    this.ngbModalRef = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
  }

  closeModal(){
    this.ngbModalRef.close();
    this.child.ngOnInit();
  }
}

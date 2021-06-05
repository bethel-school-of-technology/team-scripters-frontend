import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../models/post';


@Component({
  selector: 'app-edit-posts',
  templateUrl: './edit-posts.component.html',
  styleUrls: ['./edit-posts.component.css']
})
export class EditPostsComponent implements OnInit {
  // post: Post = new Post; - don't think we will need this line?
  // text: string;- don't think we will need this line?

  //Decorator to send the value from the text box to the parent component
 @Output() onAddPost = new EventEmitter<string>();
  constructor(private myRouter: Router) { }

  ngOnInit(): void {
  }
  
  //Child element pushing the value from the text box to the parent Post component and navigating back to the profile page.
  addNewPost(value: string) {
    console.log(value);
    this.onAddPost.emit(value);
    this.myRouter.navigate(["/profile"]);
  }
}

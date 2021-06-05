import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../models/post';
import { PostService } from '../services/post.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts = [];
  constructor(private myRouter: Router, private postService: PostService) { }

  ngOnInit(): void {
  }

  //function to add a new post, needs functionality to connect to back end
  addPost(newPost: string) {
    this.posts.push(newPost);
  }

  //function to delete a post, needs functionality
  onDelete(){
    console.log("Deleted");
  }

  //function to update a post, needs functionality
  onUpdate(){
    console.log("updated!");
  }
}

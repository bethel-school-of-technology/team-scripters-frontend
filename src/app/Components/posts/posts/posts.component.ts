import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    //on page load grab the posts from the database
    this.postService.GetPosts().subscribe(res => {
      console.log(res)
      this.posts = res;
    });
  }

  //function to delete a post, needs functionality testing
  onDelete(id: any, i: any) {
    console.log("Deleted");
    if (window.confirm('Do you want to go ahead?')) {
      this.postService.deletePost(id).subscribe((res) => {
        this.posts.splice(i, 1);
      })
    }
  }
  
  //Check if user is logged in in order to make edits/delete posts
  getToken(){
    return localStorage.getItem("myAppToken");
}

}

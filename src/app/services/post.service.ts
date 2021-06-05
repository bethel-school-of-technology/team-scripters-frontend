import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Post} from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  //Do we need new routes for the posts?
  serverUserURL: string = "http://localhost:5000/api/users";


  constructor(private http: HttpClient) { }

  //Function to make a server request to /api/posts route
  //Type of request: GET
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.serverUserURL);
  }

    //Function to make a server request to /api/posts route
  //Type of request: POST
  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.serverUserURL, post);
  }
}

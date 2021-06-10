import { Injectable } from '@angular/core';
import {Post} from '../Shared/models/post';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  //Do we need new routes for the posts? Node/Express API
  serverUserURL: string = "http://localhost:5000/api/posts";

  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

 // Add
 AddPost(data: Post): Observable<any> {
  let serverUserURL = `${this.serverUserURL}/add-post`;
  return this.http.post(serverUserURL, data)
    .pipe(
      catchError(this.handleError)
    )
}

// Get all the posts
GetPosts() {
  return this.http.get(`${this.serverUserURL}`);
}

// Get single object
GetPost(id:any): Observable<any> {
  let URL = `${this.serverUserURL}/post/${id}`;
  return this.http.get(URL, { headers: this.httpHeaders })
    .pipe(map((res: any) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
}

// Update the post
updatePost(id:any, data:any): Observable<any> {
  let URL = `${this.serverUserURL}/update-post/${id}`;
  return this.http.put(URL, data, { headers: this.httpHeaders })
    .pipe(
      catchError(this.handleError)
    )
}

// Delete
deletePost(id:any): Observable<any> {
  let URL = `${this.serverUserURL}/delete-post/${id}`;
  return this.http.delete(URL, { headers: this.httpHeaders}).pipe(
      catchError(this.handleError)
    )
}


// Error 
handleError(error: HttpErrorResponse) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // Handle client error
    errorMessage = error.error.message;
  } else {
    // Handle server error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(errorMessage);
}
  }


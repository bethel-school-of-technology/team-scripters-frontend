import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Shared/Components/nav/nav.component';
import { LoginComponent } from './Components/User/login/login.component';
import { SignupComponent } from './Components/User/signup/signup.component';
import { ProfileComponent } from './Components/User/profile/profile.component';
import { PostsComponent } from './Components/posts/posts/posts.component';
import { EditProfileComponent } from './Components/User/edit-profile/edit-profile.component';
import { EditPostsComponent } from './Components/posts/edit-posts/edit-posts.component';
import { AddPostComponent } from './Components/posts/add-post/add-post.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    PostsComponent,
    EditProfileComponent,
    EditPostsComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

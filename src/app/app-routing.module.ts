import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common'
import { LoginComponent } from '../app/login/login.component';
import { SignupComponent } from '../app/signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { PostsComponent } from './posts/posts.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EditPostsComponent } from './edit-posts/edit-posts.component';
import { AddPostComponent } from './add-post/add-post.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent},
  { path: 'posts', component: PostsComponent},
  { path: 'editProfile', component: EditProfileComponent},
  { path: 'editPosts/:id', component: EditPostsComponent},
  { path: 'addPost', component: AddPostComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

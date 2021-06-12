import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Components/User/login/login.component';
import { SignupComponent } from './Components/User/signup/signup.component';
import { ProfileComponent } from './Components/User/profile/profile.component';
import { PostsComponent } from './Components/posts/posts/posts.component';
import { EditProfileComponent } from './Components/User/edit-profile/edit-profile.component';
import { EditPostsComponent } from './Components/posts/edit-posts/edit-posts.component';
import { AddPostComponent } from './Components/posts/add-post/add-post.component';
import { UpdatePasswordComponent } from './Components/User/update-password/update-password.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'posts' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'editProfile/:id', component: EditProfileComponent },
  { path: 'editPosts/:id', component: EditPostsComponent},
  { path: 'addPost', component: AddPostComponent},
  { path: 'edit-password', component: UpdatePasswordComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}

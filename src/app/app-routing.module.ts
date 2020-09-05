import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommentsComponent } from './admin/views/comments/comments.component';
import { HomeComponent } from './customer/views/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: CommentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post-list/post/post.component';


@NgModule({
  declarations: [
    PostListComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    FeedRoutingModule
  ]
})
export class FeedModule { }

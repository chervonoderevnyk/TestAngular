import { Component, Input, OnInit } from '@angular/core';
import { IPost } from '../../interfaces/post.interface';
import { PostService } from './../../services/post.service';
import { CommonModule } from '@angular/common';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-posts',
  imports: [PostComponent, CommonModule],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  @Input() 
  userId: number;
  posts: IPost[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    if (this.userId) {
      this.postService.getPostsByIdUser(this.userId).subscribe(posts => this.posts = posts);
    }
  }
}

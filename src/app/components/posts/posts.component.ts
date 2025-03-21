import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
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
export class PostsComponent implements OnChanges {
  @Input() userId: number | null = null;
  posts: IPost[] = [];

  constructor(private postService: PostService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['userId'] && this.userId) {
      this.postService.getPostsByIdUser(this.userId).subscribe(posts => this.posts = posts);
    }
  }
}

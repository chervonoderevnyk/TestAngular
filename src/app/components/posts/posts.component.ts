import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
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

  @Output() postSelected = new EventEmitter<IPost>();

  constructor(private postService: PostService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['userId'] && this.userId) {
      this.posts = [];
      this.postService.getPostsByIdUser(this.userId).subscribe(posts => this.posts = posts);
    }
  }

  selectPost(post: IPost): void {
    this.postSelected.emit(post); // Надсилаємо вибраний пост у батьківський компонент
  }
}

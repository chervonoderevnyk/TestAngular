import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommentService } from './../../services/comment.service';
import { IComment } from '../../interfaces/comment.interface';
import { CommonModule } from '@angular/common';
import { CommentComponent } from '../comment/comment.component';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule, CommentComponent],
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnChanges {
  @Input() postId: number | null = null;
  comments: IComment[] = [];

  constructor(private commentService: CommentService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['postId'] && this.postId) {
      this.commentService.getCommentsByPostId(this.postId).subscribe(comments => {
        this.comments = comments;
      });
    }
  }
}

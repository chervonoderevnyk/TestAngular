import { CommentService } from './../../services/comment.service';
import { Component, Input, OnInit } from '@angular/core';
import { CommentComponent } from "../comment/comment.component";
import { CommonModule } from '@angular/common';
import { IComment } from '../../interfaces/comment.interface';

@Component({
  selector: 'app-comments',
  imports: [CommentComponent, CommonModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent implements OnInit {

  @Input()
  postId: number;
  comments: IComment[];

  constructor(private commentService:CommentService) { }

  ngOnInit(): void {
    if (this.postId) {
      this.commentService.getCommentsByPostId(this.postId).subscribe(comments => this.comments = comments);
    }
  }

}

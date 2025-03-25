import { Component, OnInit } from '@angular/core';
import { UsersComponent } from "./users/users.component";
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { IUser } from '../interfaces/user.interface';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user.service';
import { IPost } from '../interfaces/post.interface';
import { IComment } from '../interfaces/comment.interface';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, UsersComponent, PostsComponent, CommentsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit { 
  users: IUser[] = [];
  comments: IComment[] = [];

  selectedUser: IUser | null = null;
  selectedPost: IPost | null = null;

  constructor(
    private userService: UserService,
    private commentService: CommentService
  ) {}

  ngOnInit(): void {
    this.userService.getAll().subscribe(users => this.users = users);
  }
  
  selectUser(user: IUser): void {
    this.selectedUser = user;
  }
  
  selectPost(post: IPost): void {
    this.selectedPost = post;
    
    // Завантажуємо коментарі для вибраного поста
    this.commentService.getCommentsByPostId(post.id).subscribe(comments => {
      this.comments = comments;
    });
  }
}

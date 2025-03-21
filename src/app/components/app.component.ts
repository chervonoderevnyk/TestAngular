import { Component, OnInit } from '@angular/core';
import { UsersComponent } from "./users/users.component";
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { IUser } from '../interfaces/user.interface';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, UsersComponent, PostsComponent, CommentsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit { 
  users: IUser[] = [];
  selectedUser: IUser | null = null;
  isShowDetailsPost: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAll().subscribe(users => this.users = users);
  }

  selectUser(user: IUser): void {
    this.selectedUser = user;
    this.isShowDetailsPost = true; // автоматично відкривати пости після вибору користувача
  }

  showOrHidePosts(): void {
    this.isShowDetailsPost = !this.isShowDetailsPost;
  }
}

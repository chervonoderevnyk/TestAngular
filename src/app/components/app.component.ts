import { Component } from '@angular/core';
import { UsersComponent } from "./users/users.component";
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';

@Component({
  selector: 'app-root',
  imports: [UsersComponent, PostsComponent, CommentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Test-angular';
}

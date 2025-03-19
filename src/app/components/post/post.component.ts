import { Component, Input, OnInit } from '@angular/core';
import { IPost } from '../../interfaces/post.interface';
import { CommonModule } from '@angular/common';
import { PostDetailsComponent } from '../post-details/post-details.component';

@Component({
  selector: 'app-post',
  imports: [PostDetailsComponent, CommonModule],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: IPost;
  isShowDetailsPost: boolean = false;

  constructor() { }

  ngOnInit(): void {}

  showOrHidePostDetails(): void {
    this.isShowDetailsPost = !this.isShowDetailsPost;
  }
}

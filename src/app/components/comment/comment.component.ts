import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IComment } from '../../interfaces/comment.interface';

@Component({
  selector: 'app-comment',
  imports: [ CommonModule ],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss'
})
export class CommentComponent implements OnInit {

  @Input()
  comment: IComment;

  constructor() { }

  ngOnInit(): void {
  } 

}

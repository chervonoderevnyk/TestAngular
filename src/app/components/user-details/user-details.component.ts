import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../../interfaces/user.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-details',
  imports: [CommonModule],
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  @Input()
   user: IUser;
   isShowDetailsPost: boolean = false;

  constructor() { }

  ngOnInit(): void {}

  showOrHidePosts(): void {
    this.isShowDetailsPost = !this.isShowDetailsPost;
  }
}

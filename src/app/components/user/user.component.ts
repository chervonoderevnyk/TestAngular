import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../../interfaces/user.interface';
import { UserDetailsComponent } from "../user-details/user-details.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [UserDetailsComponent, CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {

  @Input() 
  user: IUser;
  isShowDetails: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showOrHide():void  {
    this.isShowDetails = !this.isShowDetails;
  }

}

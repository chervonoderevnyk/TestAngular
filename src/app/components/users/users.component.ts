import { UserService } from './../../services/user.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IUser } from '../../interfaces/user.interface';
import { UserComponent } from "../user/user.component";

@Component({
  selector: 'app-users',
  imports: [UserComponent, CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  users: IUser[]

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe(users => this.users = users)
  }

}

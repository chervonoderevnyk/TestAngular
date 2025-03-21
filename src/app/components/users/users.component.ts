import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IUser } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, UserComponent],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: IUser[] = [];

  @Output() userSelected = new EventEmitter<IUser>();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAll().subscribe(users => this.users = users);
  }

  selectUser(user: IUser): void {
    this.userSelected.emit(user);
  }
}

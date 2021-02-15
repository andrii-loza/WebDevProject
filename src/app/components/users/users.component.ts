import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  isShowTable = true;
  users: any[] = [];
  constructor(public userService: UsersService) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  changeStatus(): void {
    this.isShowTable = !this.isShowTable;
  }

  remove(i: number): void {
    this.userService.removeUser(i);
  }

  flagUser(i: number): void {
    this.userService.flagUser(i);
  }

}

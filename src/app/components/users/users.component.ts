import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  isShowTable: boolean = true;
  users: any[] = [];
  constructor(public userService: UsersService) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  changeStatus() {
    this.isShowTable = !this.isShowTable;
  }

  remove(i: number) {
    this.userService.removeUser(i);
  }

  flagUser(i: number) { 
    this.userService.flagUser(i);
  }

}

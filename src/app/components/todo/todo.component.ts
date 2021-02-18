import { Component, OnInit } from '@angular/core';
import { TodoUsersService } from 'src/app/services/todo-users.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor(public todoUsersService: TodoUsersService) { }

  todoUsers: any[] = [];

  ngOnInit(): void {
    this.todoUsers = this.todoUsersService.getTodoUsers();
  }

}

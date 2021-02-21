import { Component, OnChanges, OnInit } from '@angular/core';
import { TodoUsersService } from 'src/app/services/todo-users.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit, OnChanges {
  constructor(public todoUsersService: TodoUsersService) {}

  todoUsers: any[] = [];

  ngOnChanges(): void {
    this.todoUsers = this.todoUsersService.getTodoUsers();
  }

  ngOnInit(): void {
    this.todoUsers = this.todoUsersService.getTodoUsers();
  }
}

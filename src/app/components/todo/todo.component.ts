import { Component, OnInit } from '@angular/core';
import { TodoUser } from 'src/app/interfaces';
import { TodoUsersService } from 'src/app/services/todo-users.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  constructor(public todoUsersService: TodoUsersService) { }

  todoUsers: TodoUser[] = [];

  ngOnInit(): void {
    this.todoUsers = this.todoUsersService.getTodoUsers();
    this.todoUsersService.searchSubject.subscribe(todos => this.todoUsers = todos);
  }
}

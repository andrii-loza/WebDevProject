import { Component, OnInit } from '@angular/core';
import { TodoUsersService } from 'src/app/services/todo-users.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchValue = '';
  constructor(private todoUsersService: TodoUsersService) { }

  ngOnInit(): void {
  }

  searchName(): void {
    this.todoUsersService.searchName(this.searchValue);
  }
}

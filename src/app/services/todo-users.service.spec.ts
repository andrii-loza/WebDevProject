import { TestBed } from '@angular/core/testing';

import { TodoUsersService } from './todo-users.service';

describe('TodoUsersService', () => {
  let service: TodoUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

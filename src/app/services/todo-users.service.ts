import { Injectable } from '@angular/core';
import { TodoUser } from '../interfaces';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoUsersService {
  searchSubject = new Subject<TodoUser[]>();
  todoUsers: TodoUser[] = [
    {
      global: {
        name: 'Minnie Ferguson',
        location: 'Cheasepeakem, USA',
      },
      skills: {
        angular: 'Angular JS',
        react: 'React',
        net: '.NET',
        more: 'and 2 more',
      },
      rate: '$150/hour',
      work: '32 Hours/week',
      score: 365543,
    },
    {
      global: {
        name: 'Calleb Castillo',
        location: 'Pjiladelphia, Bangladesh',
      },
      skills: {
        angular: 'Angular JS',
        react: 'React',
        net: '.NET',
        more: 'and 3 more',
      },
      rate: '$200/hour',
      work: '21 Hours/week',
      score: 10543,
    },
    {
      global: {
        name: 'Ann Hunter',
        location: 'Lexington, India',
      },
      skills: {
        angular: 'Angular JS',
        react: 'React',
        net: '.NET',
        more: 'and 1 more',
      },
      rate: '$90/hour',
      work: '25 Hours/week',
      score: 234543,
    },
    {
      global: {
        name: 'Florence Hanson',
        location: 'Corpus Christi, France',
      },
      skills: {
        angular: 'Angular JS',
        react: 'React',
        net: '.NET',
        more: 'and 6 more',
      },
      rate: '$240/hour',
      work: '24 Hours/week',
      score: 54321,
    },
    {
      global: {
        name: 'Allan Warren',
        location: 'Madison, Brazil',
      },
      skills: {
        angular: 'Angular JS',
        react: 'React',
        net: '.NET',
        more: 'and 4 more',
      },
      rate: '$50/hour',
      work: '18 Hours/week',
      score: 98765,
    },
  ];
  searchUsers: TodoUser[] = this.todoUsers.slice();
  searchSkill: TodoUser[] = [];

  constructor() { }

  getTodoUsers(): TodoUser[] {
    return this.todoUsers;
  }

  searchName(value: string): void {
    this.searchUsers = [];

    this.todoUsers.forEach((todo) => {
      if (todo.global.name.toLowerCase().includes(value.toLowerCase())) {
        this.searchUsers.push(todo);
      }
    });
    this.searchSubject.next(this.searchUsers);
  }

  filterTodoUsers(skills: string[]): void {
    this.searchSkill = this.searchUsers.slice();
    let i = 0;
    this.searchUsers.forEach(todo => {
      i++;
      skills.forEach(skill => {
        if (!Object.values(todo.skills).some(filter => filter.toLowerCase() === skill.toLowerCase())) {
          this.searchSkill.splice(--i, 1);
        }
      });
    });
    this.searchSubject.next(this.searchSkill);
  }
}

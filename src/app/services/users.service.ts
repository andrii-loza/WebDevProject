import { Injectable } from '@angular/core';
import {User} from '../interfaces ';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: User[] = [
    {
      firstName: 'Andrii',
      lastName: 'Petrov',
      email: 'andrii@email.com',
    },
    {
      firstName: 'Petro',
      lastName: 'Ivanow'
    },
    {
      firstName: 'Ostap',
      lastName: 'Bender',
      phone: '+4354534543'
    }
  ];
  constructor() { }


  getUsers(): User[] {
    return this.users;
  }

  addNewUser(user: User): void {
    this.users.push(user);
    console.log('User is created');
  }

  removeUser(i: number): void {
    this.users.splice(i, 1);
  }

  flagUser(i: number): void {
    this.users[i].flagged = true;
  }
}

import { Injectable } from '@angular/core';

interface User {
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  address?: string | UserAddress;
  flagged?: boolean;
} 

interface UserAddress {
  street: string;
  numberOfHouse: number;
}

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


  getUsers() {
    return this.users;
  }

  addNewUser(user: User) {    
    this.users.push(user);
    console.log('User is created');
  }

  removeUser(i: number) {
    this.users.splice(i, 1);
  }

  flagUser(i: number) {
    this.users[i].flagged = true;
  }
}

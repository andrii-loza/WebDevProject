import { Injectable } from '@angular/core';
// import {User} from '../interfaces ';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

//   export interface User {
//   firstName: string;
//   lastName: string;
//   email?: string;
//   phone?: string;
//   country?: string;
//   city?: string;
//   address?: string | UserAddress;
//   timezone?: string;
//   links?: object;
//   rate?: number;
//   works_hours_limit?: number;
//   jinn_score?: number;
//   skills?: string[];
//   flagged?: boolean;
// }
//
// interface UserAddress {
//   street: string;
//   numberOfHouse: number;
// }

  users: any[] = [
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
    },
    {
      firstName: "Shojol",
      lastName: "Islam",
      email: "me@shojol.com",
      country: "Bangladesh",
      timezone: "GMT +6",
      city: "Dhaka",
      links: {

        slack: "shojolislam",
        email: "me@shojol.com"
      },
      rate: 40,
      works_hours_limit: 22,
      jinn_score: 1243,
      skills: ['AngularJs', 'React', '.NET', 'C++', "PHP", "React Native", "Angular"]
    }
  ];

  emailForLog: string = 'me@shojol.com';//temporarily(need componet for login)
  constructor() { }


  getUsers(): any[] {
    return this.users;
  }

  addNewUser(user: any): void {
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

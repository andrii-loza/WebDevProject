import { Injectable } from '@angular/core';

interface todoUser{
  global: string | todoUserInfo;
  skills: string | todoUserSkills;
  rate: string;
  work: string;
  score: number;
}

interface todoUserInfo{
  name: string;
  location?: string;
}

interface todoUserSkills{
  angular?: string;
  react?: string;
  net?: string;
  more?: string;
}

@Injectable({
  providedIn: 'root'
})

export class TodoUsersService {

  todoUsers: todoUser[] = [
    {
      global: {
        name: 'Minnie Ferguson',
        location: 'Cheasepeakem, USA'
      },
      skills: {
        angular: 'Angular JS',
        react: 'React',
        net: '.NET',
        more: 'and 2 more'
      },
      rate: '$150/hour',
      work: '32 Hours/week',
      score: 365543
    },
    {
      global: {
        name: 'Calleb Castillo',
        location: 'Pjiladelphia, Bangladesh' 
      },
      skills: {
        angular: 'Angular JS',
        react: 'React',
        net: '.NET',
        more: 'and 3 more'
      },
      rate: '$200/hour',
      work: '21 Hours/week',
      score: 10543
    },
    {
      global: {
        name: 'Ann Hunter',
        location: 'Lexington, India'
      },
      skills: {
        angular: 'Angular JS',
        react: 'React',
        net: '.NET',
        more: 'and 1 more'
      },
      rate: '$90/hour',
      work: '25 Hours/week',
      score: 234543
    },
    {
      global: {
        name: 'Florence Hanson',
        location: 'Corpus Christi, France'
      },
      skills: {
        angular: 'Angular JS',
        react: 'React',
        net: '.NET',
        more: 'and 6 more'
      },
      rate: '$240/hour',
      work: '24 Hours/week',
      score: 54321
    },
    {
      global: {
        name: 'Allan Warren',
        location: 'Madison, Brazil'
      },
      skills: {
        angular: 'Angular JS',
        react: 'React',
        net: '.NET',
        more: 'and 4 more'
      },
      rate: '$50/hour',
      work: '18 Hours/week',
      score: 98765
    }
  ]

  constructor() { }

  getTodoUsers() {
    return this.todoUsers;
  } 
}

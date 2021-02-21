import { Injectable } from '@angular/core';

interface SkillsData {
  skill: string;
  isActive: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  skills: SkillsData[] = [
    { skill: 'C++', isActive: true },
    { skill: 'Wordpress', isActive: true },
    { skill: 'Java', isActive: true },
    { skill: 'Angular JS', isActive: true },
    { skill: 'React', isActive: true },
    { skill: 'HTML/CSS', isActive: true },
    { skill: 'PHP', isActive: true },
  ];
  constructor() {}
  getSkills(): SkillsData[] {
    return this.skills;
  }

  addSkills(skill: string): void {
    this.skills.push({ skill, isActive: true });
  }
}

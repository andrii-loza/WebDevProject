import { SkillsData } from './../interfaces/skill';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  skills: SkillsData[] = [
    { skill: 'C++', isActive: false },
    { skill: 'Wordpress', isActive: false },
    { skill: 'Java', isActive: false },
    { skill: 'Angular JS', isActive: false },
    { skill: 'React', isActive: false },
    { skill: 'HTML/CSS', isActive: false },
    { skill: 'PHP', isActive: false },
  ];
  constructor() { }
  getSkills(): SkillsData[] {
    return this.skills;
  }

  addSkills(newSkill: string): void {
    this.skills.push({ skill: newSkill, isActive: false });
  }
}

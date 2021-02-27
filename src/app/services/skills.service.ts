import { Injectable } from '@angular/core';

import { SkillsData } from './../interfaces/skill';

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

  rotateSkills(skills: string[]): void {
    this.skills = [];
    for (const skill of skills) {
      this.skills.push({ skill, isActive: false });
    }
  }
}

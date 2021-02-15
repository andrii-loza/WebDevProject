import { Injectable } from '@angular/core';

interface SkillsData {
  skill: string;
  isActive: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  skills: SkillsData[] = [{ skill: 'C++', isActive: false }]
  constructor() {
  }
  getSkills(): SkillsData[] {
    return this.skills;
  }
  addSkill(skill: string) {
    this.skills.push({ skill: skill, isActive: false })
  }
  rotateSkills(skills: string[]) {
    this.skills = [];
    for (const skill of skills) {
      this.skills.push({ skill: skill, isActive: false })
    }
  }
}

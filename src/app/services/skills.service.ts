import { Injectable } from '@angular/core';

interface SkillsData {
  skill: string;
  isActive: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  skills: SkillsData[] = [{ skill: 'C++', isActive: true }];
  constructor() {
  }
  getSkills(): SkillsData[] {
    return this.skills;
  }

  addSkills(skill: string): void {
    this.skills.push({ skill, isActive: true });
  }
}

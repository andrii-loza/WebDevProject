import { TodoUsersService } from 'src/app/services/todo-users.service';
import { SkillsData } from './../../interfaces/skill';
import { SkillsService } from './../../services/skills.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: SkillsData[] = [];
  skill = '';
  isShowInput = false;
  btnColor = 'basic';
  skillsForSearch: string[] = [];
  constructor(private skillService: SkillsService, private todoUserService: TodoUsersService) { }

  ngOnInit(): void {
    this.getSkills();
  }

  getSkills(): void {
    this.skills = this.skillService.getSkills();
  }

  showInput(): void {
    this.isShowInput = true;
  }

  addSkill(skill: string): void {
    if (skill) {
      this.skillService.addSkills(skill);
      this.getSkills();
      this.skill = '';
      this.isShowInput = false;
    }
  }

  skillSearch(i: number): void {
    this.skills[i].isActive = !this.skills[i].isActive;
    this.skills[i].isActive
      ? this.skillsForSearch.push(this.skills[i].skill)
      : this.skillsForSearch.splice(this.skillsForSearch.indexOf(this.skills[i].skill), 1);
    this.todoUserService.filterTodoUsers(this.skillsForSearch);
  }


}

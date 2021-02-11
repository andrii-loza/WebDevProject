import { SkillsService } from './../../services/skills.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: any[] = [];
  skill: string = '';
  isShowInput: boolean = false;
  btnColor: string = 'basic'

  constructor(private skillService: SkillsService) { }

  ngOnInit(): void {
    this.getSkills();
  }
  getSkills() {
    this.skills = this.skillService.getSkills();
  }
  showInput() {
    this.isShowInput = true;
  }
  addSkill(skill: string) {
    if (skill != '') {
      this.skillService.addSkills(skill);
      this.getSkills();
      this.skill = '';
      this.isShowInput = false;
    }
  }
  changeActive(i: number) {
    this.skills[i].isActive = !this.skills[i].isActive
    // this.btnColor = this.skills[i].isActive ? 'primary' : 'basic';
  }
}

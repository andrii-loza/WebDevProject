import { SkillsService } from './../../services/skills.service';
import { UsersService } from 'src/app/services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: any[] = [];
  constructor(private usersService: UsersService, private skillsService: SkillsService) { }

  ngOnInit(): void {
    this.user.push(this.usersService.getUsers().find((user: any) => user.email === this.usersService.emailForLog));
    this.skillsService.rotateSkills(this.user[0].skills);

  }

}

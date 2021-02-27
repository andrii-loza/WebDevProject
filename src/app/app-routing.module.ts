import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { TodoComponent } from './components/todo/todo.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
import { SignComponent } from './components/sign/sign.component';

const routes: Routes = [
  { path: 'home', canActivate: [AuthGuard], component: HomeComponent },
  { path: '', component: SignComponent },
  { path: 'users', canActivate: [AuthGuard], component: UsersComponent },
  { path: 'new-user', canActivate: [AuthGuard], component: NewUserComponent },
  { path: 'skills', canActivate: [AuthGuard], component: SkillsComponent },
  { path: 'profile', canActivate: [AuthGuard], component: ProfileComponent },
  { path: 'todo-users', canActivate: [AuthGuard], component: TodoComponent },
  { path: 'search', canActivate: [AuthGuard], component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

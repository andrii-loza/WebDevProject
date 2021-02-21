import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { TodoComponent } from './components/todo/todo.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'new-user', component: NewUserComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'todo-users', component: TodoComponent },
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

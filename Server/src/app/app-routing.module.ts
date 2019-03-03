import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {SkillsComponent} from './skills/skills.component';
import {EducationComponent} from './education/education.component';
import {EmploymentHistoryComponent} from './employment-history/employment-history.component';

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'education', component: EducationComponent },
  { path: 'employment', component: EmploymentHistoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    enableTracing: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

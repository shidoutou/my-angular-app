import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillSMainComponent } from './skills/main/main.component';

const routes: Routes = [
  { path: 'skills', component: SkillSMainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

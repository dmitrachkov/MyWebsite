import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ImagesPageComponent } from './images-page/images-page.component';
import { SkillsPageComponent } from './skills-page/skills-page.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import { BigImageComponent } from './big-image/big-image.component';

const routes: Routes = [
  {path: "", pathMatch: 'full', redirectTo: "/home"},
  {path: "home", component: WelcomePageComponent, data: {animation: 1}},
  {path: "works", component: ImagesPageComponent, data: {animation: 2}},
  {path: "skills", component: SkillsPageComponent, data: {animation: 3}},
  {path: "contacts", component: ContactsPageComponent, data: {animation: 4}},
  {path: "works/:elem", component: BigImageComponent, data: {animation: "elem"}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

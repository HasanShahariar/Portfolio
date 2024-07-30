import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { BannerComponent } from './components/banner/banner.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperianceComponent } from './components/experiance/experiance.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ContactComponent } from './components/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';


@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    SkillsComponent,
    ExperianceComponent,
    ProjectsComponent,
    ProjectCardComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    QuillModule.forRoot()
  ]
})
export class HomepageModule { }

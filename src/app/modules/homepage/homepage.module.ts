import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { BannerComponent } from './components/banner/banner.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperianceComponent } from './components/experiance/experiance.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperianceCardComponent } from './components/experiance-card/experiance-card.component';


@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    SkillsComponent,
    ExperianceComponent,
    ProjectsComponent,
    ExperianceCardComponent,
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    SharedModule
  ]
})
export class HomepageModule { }

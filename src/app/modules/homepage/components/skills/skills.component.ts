import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SkillsService } from '../../services/skills.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit,AfterViewInit {
  skills: any;
  defaultImageUrl = '../../../../../assets/images/no-image.png'
  tab: number = 1;
  filteredSkills: any;

  constructor(
    private service:SkillsService
  ) { }

  ngOnInit() {
    this.getSkills();
  }

  ngAfterViewInit(): void {
    const scrollableContainer = document.querySelector('.container');

    if (scrollableContainer) {
      scrollableContainer.addEventListener('scroll', () => {
        AOS.refresh();
      });
    }
  }



  getSkills(){
    this.service.getSkills().subscribe((data) => {
      this.skills = data;
      this.filteredSkills = data;
      console.log(this.skills);
    });
  }
  handleImageError(event: Event): void {
    const element = event.target as HTMLImageElement;
    element.src = this.defaultImageUrl;
  }
  switchTab(tab){
    this.tab = tab;
    if(tab==1){
      this.filteredSkills = this.skills
    }
    if(tab==2){
      this.filteredSkills = this.skills.filter(c=>c.typeId==2) 
    }
    if(tab==3){
      this.filteredSkills = this.skills.filter(c=>c.typeId==1) 
    }
    if(tab==4){
      this.filteredSkills = this.skills.filter(c=>c.typeId==3) 
    }
    if(tab==5){
      this.filteredSkills = this.skills.filter(c=>c.typeId==4 || c.typeId==5) 
    }
    if(tab==6){
      this.filteredSkills = this.skills.filter(c=>c.typeId==6) 
    }
    if(tab==7){
      this.filteredSkills = this.skills.filter(c=>c.typeId==7) 
    }
    if(tab==8){
      this.filteredSkills = this.skills.filter(c=>c.typeId==8) 
    }
  }

 


}

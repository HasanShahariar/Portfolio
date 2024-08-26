import { Component, OnInit } from '@angular/core';
import { LocomotiveScrollService } from 'src/app/modules/shared/services/locomotive-scroll.service';
import { ThemeService } from 'src/app/modules/shared/services/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private locomotiveScrollService: LocomotiveScrollService) {}

  ngOnInit() {
    // After new content is loaded
    // this.locomotiveScrollService.update();
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

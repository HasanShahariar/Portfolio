import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/modules/shared/services/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private themeService:ThemeService
  ) { }

  ngOnInit() {
  }
  switchTheme(theme: string) {
    this.themeService.setTheme(theme);
  }
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
 

}

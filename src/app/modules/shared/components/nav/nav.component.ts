import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  menu: number = 1;
  showInfo: boolean = false;
  @Output() navigateToSection = new EventEmitter<string>();

  constructor(
    private el: ElementRef
  ) { }

  ngOnInit() {
    this.checkScroll();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedInside = this.el.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.showInfo = false;
    }
  }
  toggleInfo() {
    this.showInfo = !this.showInfo;
  }
  changeMenu(menu,navItem){
    this.menu = menu
    this.navigateToSection.emit(navItem);
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }

  private checkScroll() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      if (window.scrollY > 50) { // Adjust the scrollY value as needed
        navbar.classList.remove('transparent');
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
        navbar.classList.add('transparent');
      }
    }
  }

  

  onNavigate(section: string) {
    this.navigateToSection.emit(section);
  }

}

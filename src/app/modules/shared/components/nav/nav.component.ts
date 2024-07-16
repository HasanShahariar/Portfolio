import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output, Renderer2 } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ThemeService } from '../../services/theme.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [
    trigger('slideDownUp', [
      state('void', style({
        transform: 'translateY(-100%)',
        opacity: 0
      })),
      state('*', style({
        transform: 'translateY(0)',
        opacity: 1
      })),
      transition(':enter', [
        animate('300ms ease-out')
      ]),
      transition(':leave', [
        animate('300ms ease-in')
      ])
    ])
  ]
})
export class NavComponent implements OnInit {
  menu: number = 1;
  showInfo: boolean = false;
  @Output() navigateToSection = new EventEmitter<string>();
  showContextMenu = false;
  contextMenuX: number;
  contextMenuY: number;

  showThemes = false;
  themes = [
    {
      title:'light',
      icon:this.sanitizer.bypassSecurityTrustHtml('<i class="far fa-sun" style="color: black"></i>')
    }, 
    {
      title:'dark',
      icon:this.sanitizer.bypassSecurityTrustHtml('<i class="fas fa-moon" style="color: black"></i>')
    }, 
    {
      title:'red',
      icon:this.sanitizer.bypassSecurityTrustHtml('<i class="fas fa-circle" style="color: red"></i>')
    },
    {
      title:'orange',
      icon:this.sanitizer.bypassSecurityTrustHtml('<i class="fas fa-circle" style="color: #F0A500"></i>')
    },
    {
      title:'mint',
      icon:this.sanitizer.bypassSecurityTrustHtml('<i class="fas fa-circle" style="color: #77E4C8"></i>')
    }
  ]

  constructor(
    private renderer: Renderer2, 
    private elementRef: ElementRef,
    private themeService:ThemeService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.checkScroll();
    this.renderer.listen('document', 'click', (event: Event) => {
      if (this.showThemes && !this.elementRef.nativeElement.contains(event.target)) {
        this.closethemes();
      }
    });
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
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

  onRightClick(event: MouseEvent): void {

    event.preventDefault(); // Prevent the default browser context menu
    this.showContextMenu = true;
    this.contextMenuX = event.clientX - 250;
    this.contextMenuY = event.clientY;


    // Hide the context menu after a short delay (e.g., 5 seconds)
  }
  handleClickOutside(){
    this.showContextMenu = false
  }
  

  ngOnDestroy() {
    // Cleanup listeners when component is destroyed
    this.renderer.listen('document', 'click', null);
  }

  togglethemes(event: Event) {
    event.stopPropagation();
    this.showThemes = !this.showThemes;
  }

  closethemes() {
    this.showThemes = false;
  }
  switchTheme(theme: string) {
    this.themeService.setTheme(theme);
  }

}

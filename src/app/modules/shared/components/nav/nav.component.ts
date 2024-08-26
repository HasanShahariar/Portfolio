import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output, Renderer2, OnDestroy } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ThemeService } from '../../services/theme.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { LocomotiveScrollService } from '../../services/locomotive-scroll.service';

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
export class NavComponent implements OnInit, OnDestroy {
  menu: number = 1;
  showInfo: boolean = false;
  @Output() navigateToSection = new EventEmitter<string>();
  showContextMenu = false;
  contextMenuX: number;
  contextMenuY: number;

  showThemes = false;
  themes = [
    {
      title: 'light',
      icon: this.sanitizer.bypassSecurityTrustHtml('<i class="far fa-sun" style="color: black"></i>')
    },
    {
      title: 'dark',
      icon: this.sanitizer.bypassSecurityTrustHtml('<i class="fas fa-moon" style="color: black"></i>')
    },
    {
      title: 'red',
      icon: this.sanitizer.bypassSecurityTrustHtml('<i class="fas fa-circle" style="color: red"></i>')
    },
    {
      title: 'orange',
      icon: this.sanitizer.bypassSecurityTrustHtml('<i class="fas fa-circle" style="color: #F0A500"></i>')
    },
    {
      title: 'mint',
      icon: this.sanitizer.bypassSecurityTrustHtml('<i class="fas fa-circle" style="color: #77E4C8"></i>')
    }
  ];
  selectedtheme: string;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private themeService: ThemeService,
    private sanitizer: DomSanitizer,
    private locomotiveScrollService: LocomotiveScrollService
  ) { }

  ngOnInit() {
    this.selectedtheme = this.themes[0].title;
    // this.locomotiveScrollService.initLocomotiveScroll();
    // this.subscribeToScrollEvents();
    this.renderer.listen('document', 'click', (event: Event) => {
      if (this.showThemes && !this.elementRef.nativeElement.contains(event.target)) {
        this.closethemes();
      }
    });
  }

  // private subscribeToScrollEvents() {
  //   this.locomotiveScrollService.scroll.on('scroll', (args: any) => {
  //     this.checkScroll(args.scroll.y);
  //   });
  // }

  checkScroll(scrollY: number) {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      if (scrollY > 50) { // Adjust the scrollY value as needed
        navbar.classList.remove('transparent');
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
        navbar.classList.add('transparent');
      }
    }
  }

  toggleInfo() {
    this.showInfo = !this.showInfo;
  }

  changeMenu(menu, navItem) {
    this.menu = menu;
    this.navigateToSection.emit(navItem);
  }

  onNavigate(section: string) {
    this.navigateToSection.emit(section);
  }

  onRightClick(event: MouseEvent): void {
    event.preventDefault(); // Prevent the default browser context menu
    this.showContextMenu = true;
    this.contextMenuX = event.clientX - 250;
    this.contextMenuY = event.clientY;
  }

  handleClickOutside() {
    this.showContextMenu = false;
  }

  ngOnDestroy() {
    // Cleanup listeners when component is destroyed
    this.renderer.listen('document', 'click', null);
    // this.locomotiveScrollService.destroy();
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
    this.selectedtheme = theme;
  }
}

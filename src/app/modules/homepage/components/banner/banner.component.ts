import { AfterViewInit, ApplicationRef, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  MoveDirection,
  ClickMode,
  HoverMode,
  OutMode,
  Engine,
  Container,
  Size,
} from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';
import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ThemeService } from 'src/app/modules/shared/services/theme.service';
import Typed from 'typed.js';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit,AfterViewInit  {
  id = 'tsparticles';

  primaryThemeColor: string;
  particlesOptions: any;
  particlesId = 'tsparticles-' + Date.now(); // U
  private themeChangeListener: () => void;
  stringsArray: string[];
  constructor(
    private cdr: ChangeDetectorRef,
    private appRef: ApplicationRef
    
  ) {}

  ngOnInit() {
    this.setParticlesOptions();
   
    this.themeChangeListener =  () => {
      
      debugger
      this.setParticlesOptions();
      this.cdr.detectChanges();
    };
    document.addEventListener('theme-change', this.themeChangeListener);

  }


  ngAfterViewInit() {
    const options = {
      strings: [
        'Mastering Modern Web Tech',
        'Crafting Dynamic Web Solutions',
        'Innovating with .NET & Angular'
      ],
      typeSpeed: 50,
      backSpeed: 50,
      // backDelay: 1000,
      // startDelay: 500,
      loop: true,
      showCursor: false,
      // cursorChar: '',
    };

    new Typed('#typed-output', options);
  }



  setParticlesOptions(): void {
    this.primaryThemeColor = getComputedStyle(document.documentElement)
      .getPropertyValue('--primary-theme-color')
      .trim();

    this.particlesOptions = {
      background: {
        color: {
          value: '#RRGGBB',
        },
        size: 'cover',
        position: '50% 50%',
        repeat: 'no-repeat',
      },
      fullScreen: {
        enable: false,
      },
      fpsLimit: 555,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: ClickMode.push,
          },
          onHover: {
            enable: true,
            mode: HoverMode.repulse,
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#727272",
          // value: this.primaryThemeColor,
        },
        links: {
          color: "#727272",
          // color: this.primaryThemeColor,
          distance: 200,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 70,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },

      name: 'Snow',

      detectRetina: true,
    };
    this.particlesId = 'tsparticles-' + Date.now();
    this.cdr.detectChanges(); // Trigger change detection
  }
  particlesLoaded(container: Container): void {
    console.log(container);
  }

  async particlesInit(engine: Engine): Promise<void> {
    console.log(engine);
    await loadSlim(engine);
  }
  downloadPdf() {
    const link = document.createElement('a');
    link.href = '../../../../../assets/pdf/Resume-Hasan Shahariar.pdf';
    link.download = 'Resume-Hasan Shahariar.pdf';
    link.click();
  }
}

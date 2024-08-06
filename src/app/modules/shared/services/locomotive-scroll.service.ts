import { HostListener, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import LocomotiveScroll from 'locomotive-scroll';
@Injectable({
  providedIn: 'root'
})
export class LocomotiveScrollService {

  private renderer: Renderer2;
  public scroll: any;
  private scrollTimeout: any;


  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  initLocomotiveScroll(): void {


    
    this.scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      lerp: 0.11, // Adjust this value to make the scroll faster
      smoothMobile: true,
      smoothTablet: true,
      multiplier: 0.45
    });

    this.scroll.on('scroll', (args: any) => {
      this.handleScroll(args);
    });
  }
  handleScroll(args: any): void {

    // Clear the previous timeout
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }

    // Set a new timeout
    this.scrollTimeout = setTimeout(() => {
      this.onScrollStop(args);
    }, 10);
  }

  onScrollStop(args: any): void {
    // Perform actions after scroll stops for 1 second
    // console.log('Scroll stopped', args.scroll.y);
  }

  update(): void {
    this.scroll.update();
  }

  destroy(): void {
    // console.log("destroyed");
    
    if (this.scroll) this.scroll.destroy();
  }

  @HostListener('window:resize')
  onResize() {
    this.scroll.update();
  }

  // disableScroll(): void {
  //   if (this.scroll) {
  //     this.scroll.stop();
  //   }
  // }

  // enableScroll(): void {
  //   if (this.scroll) {
  //     this.scroll.start();
  //   }
  // }
}


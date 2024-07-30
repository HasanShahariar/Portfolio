import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { LocomotiveScrollService } from '../services/locomotive-scroll.service';

@Directive({
  selector: '[appStopPropagation]'
})
export class StopPropagationDirective {

  private parentContainer: HTMLElement;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private locomotiveScrollService: LocomotiveScrollService
  ) {
    this.parentContainer = this.el.nativeElement.closest('[data-scroll-container]');
  }

  // @HostListener('scroll', ['$event'])
  // onScroll(event: Event): void {
  //   event.stopPropagation();
  //   this.locomotiveScrollService.disableScroll();
  // }

  @HostListener('wheel', ['$event'])
  onWheel(event: Event): void {
    event.stopPropagation();
  }

  @HostListener('touchmove', ['$event'])
  onTouchMove(event: Event): void {
    event.stopPropagation();
  }

  // @HostListener('mouseleave')
  // onMouseLeave(): void {
  //   this.locomotiveScrollService.enableScroll();
  // }
}

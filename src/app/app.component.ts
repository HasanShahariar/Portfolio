import { AfterViewInit, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { LocomotiveScrollService } from './modules/shared/services/locomotive-scroll.service';
import * as AOS from 'aos';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  constructor(private locomotiveScrollService: LocomotiveScrollService) {}

  ngOnInit(): void {
    // this.locomotiveScrollService.initLocomotiveScroll();
    AOS.init({
      once: false,
      mirror: true,
      duration: 100,
      delay: 0,
      easing: 'ease-in-out',
      anchorPlacement: 'top-bottom'
    })
  }

    @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    AOS.refresh();  // Refresh AOS on each scroll event
  }

 





 

  
}

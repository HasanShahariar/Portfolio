import { Component, OnDestroy, OnInit } from '@angular/core';
import { LocomotiveScrollService } from './modules/shared/services/locomotive-scroll.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'portfolio';
  constructor(private locomotiveScrollService: LocomotiveScrollService) {}

  ngOnInit(): void {
    // this.locomotiveScrollService.initLocomotiveScroll();
  }

  ngOnDestroy(): void {
    // this.locomotiveScrollService.destroy();
  }

  
}

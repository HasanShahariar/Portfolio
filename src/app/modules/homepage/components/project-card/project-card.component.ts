import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  portfolioGitUrl = "https://github.com/HasanShahariar/portfolio";
  portfolioViewUrl = "https://hasan-shahariar.netlify.app/portfolio/";

  constructor(private el: ElementRef) {}

  ngOnInit() {
  }

  @Input() card: any;

  

  // @HostListener('mousemove', ['$event'])
  // onMouseMove(event: MouseEvent) {
  //   const cardElement = this.el.nativeElement.querySelector('.card');
  //   const cardRect = cardElement.getBoundingClientRect();

  //   const xAxis = (cardRect.width / 2 - (event.clientX - cardRect.left)) / 10;
  //   const yAxis = (cardRect.height / 2 - (event.clientY - cardRect.top)) / 10;

  //   cardElement.style.transform = `rotateY(${xAxis}deg) rotateX(${-yAxis}deg)`;
  // }

  // @HostListener('mouseleave')
  // onMouseLeave() {
  //   const cardElement = this.el.nativeElement.querySelector('.card');
  //   cardElement.style.transform = 'rotateY(0deg) rotateX(0deg)';
  // }

  openUrl(url){
    window.open(url, '_blank');
  }

}

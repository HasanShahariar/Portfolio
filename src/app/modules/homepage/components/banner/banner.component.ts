import { Component, OnInit } from '@angular/core';
import particlesJS from 'particles.js';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    particlesJS.load('particles-js', '../../../../../assets/json/particles.json', function() {
      console.log('callback - particles.js config loaded');
    });
  }
  downloadPdf(){
    const link = document.createElement('a');
    link.href = '../../../../../assets/pdf/Resume-Hasan Shahariar.pdf';
    link.download = 'resume.pdf';
    link.click();
  }

}

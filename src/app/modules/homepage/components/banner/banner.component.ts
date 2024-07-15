import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  downloadPdf(){
    const link = document.createElement('a');
    link.href = '../../../../../assets/pdf/Resume-Hasan Shahariar.pdf';
    link.download = 'resume.pdf';
    link.click();
  }

}

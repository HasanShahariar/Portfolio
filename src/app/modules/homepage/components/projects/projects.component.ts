import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  cards = [
    {
      title: 'Protfolio',
      content: 'This is card 1 content.',
      imageUrl: '../../../../../assets/images/projects/project-portfolio.png',
    },
    {
      title: 'Protfolio',
      content: 'This is card 1 content.',
      imageUrl: '../../../../../assets/images/projects/project-portfolio.png',
    },

    // Add more card data as needed
  ];

  constructor() {}

  ngOnInit() {}
}

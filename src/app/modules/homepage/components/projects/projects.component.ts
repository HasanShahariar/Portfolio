import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  cards = [
    { title: 'Card 1', content: 'This is card 1 content.' },
    { title: 'Card 2', content: 'This is card 2 content.' },
    { title: 'Card 3', content: 'This is card 3 content.' },
    // Add more card data as needed
  ];

  constructor() { }

  ngOnInit() {
  }

  

}

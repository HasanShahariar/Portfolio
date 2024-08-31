import { Component, HostListener, OnInit } from '@angular/core';



@Component({
  selector: 'app-experiance',
  templateUrl: './experiance.component.html',
  styleUrls: ['./experiance.component.scss']
})
export class ExperianceComponent implements OnInit  {

  timelineItems = [
    {
      date: 'JAN 2022 - PRESENT',
      title: 'Backend Developer @ KMS Lighthouse',
      details: [
        'Investigated and fixed bugs in the search system of KMS Lighthouse including search algorithms, RESTful API configuration;',
        'Worked on improving search performance and multilanguage Solr configuration;',
        'Conducted research to increase language detection performance;'
      ]
    },
    {
      date: 'FEB 2020 - APR 2020',
      title: 'Backend Developer Intern @ ISPsystem',
      details: [
        'Received coaching and support from senior developers and gained practical experience in GoLang for backend development;'
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
    
  }


  

}

import { Injectable } from '@angular/core';

@Injectable()
export class ProjectsService {

  projects: Project[] = [
    {
      name: 'SugarCat Chicago (In Development)',
      date: 'February, 2018',
      picture: '../assets/bakery1.jpg',
      link: 'http://sugarcatchicago.com/',
      description: 'Angular 5 Web App with Angular Material and .NET Backend',
      technologies: [
        'Angular 5',
        'Angular Material 2',
        '.NET',
        'SQL',
        'Firebase'
      ],
    },
    {
      name: 'Seattle Law Firm (In Development)',
      date: 'February, 2018',
      picture: '../assets/law1.jpg',
      link: 'http://kesselmanlaw.azurewebsites.net/',
      description: 'Angular Material Website for Seattle Law Firm',
      technologies: [
        'Angular 5',
        'Angular Material 2'
      ],
    },
    {
      name: 'Dealership Web App',
      date: 'December, 2017',
      picture: '../assets/car-d1.jpg',
      link: 'http://autocity1.azurewebsites.net/',
      // tslint:disable-next-line:max-line-length
      description: 'Full CRUD app, register to add/edit listings.',
      technologies: [
        'Angular 4',
        'Bootstrap 3',
        '.NET',
        'REST API'
      ],
    },
    {
      name: 'Chicago Bakery',
      date: 'July, 2017',
      picture: '../assets/cakes-d2.jpg',
      link: 'https://sugarcatchicago.azurewebsites.net/',
      // tslint:disable-next-line:max-line-length
      description: 'Serverless Angular 4 application for a Chicago based sweet-shop',
      technologies: [
        'Angular 4',
        'Bootstrap 3',
        'Google Firebase',
        'HTML5, CSS3'
      ],
    }
  ];

  constructor() { }

  getProjects() {
    return this.projects;
  }

  getProject(name: string) {
    return this.projects.find(p => name === p.name);
  }
}

export interface Project {
  name: string;
  date: string;
  picture: string;
  link: string;
  description: string;
  technologies: string[];
}

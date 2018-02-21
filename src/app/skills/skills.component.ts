import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition, stagger, query, group, animateChild, keyframes } from '@angular/animations';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [
    trigger('animateAll', [
      transition('hidden => appeared', [
        group([
          query('@jumpIn',
            stagger(200, animateChild()))
        ]),
      ]
      ),
    ]),
    trigger('jumpIn', [
      state('hidden', style({
        opacity: 0,
        transform: 'translateX(-300px) scale(0.1, 0.1)',
      })),
      state('appeared', style({
        opacity: 1,
        transform: 'scale(1, 1)',
      })),
      transition('hidden => appeared', [
        animate('1s ease-out')
      ])
    ])
  ]
})
export class SkillsComponent implements OnInit {
  skills = [
    {
      name: 'Soft skills',
      // tslint:disable-next-line:max-line-length
      description: 'Strong soft skills like Teamwork, Leadership, Ability to Work Under Pressure, Selfmotivation, Multitasking and Responsibility. ',
      level: 87
    },
    {
      name: 'TypeScript',
      // tslint:disable-next-line:max-line-length
      description: 'TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript, and adds optional static typing to the language.',
      level: 76
    },
    {
      name: 'Angular',
      // tslint:disable-next-line:max-line-length
      description: 'Angular is a TypeScript-based open-source front-end web application platform led by the Angular Team at Google and by a community of individuals and corporations.',
      level: 85
    },
    {
      name: 'JavaScript',
      // tslint:disable-next-line:max-line-length
      description: 'Multi-paradigm language, JavaScript supports event-driven, functional, and imperative (including object-oriented and prototype-based) programming styles. ',
      level: 69
    },
    {
      name: 'Bootstrap',
      // tslint:disable-next-line:max-line-length
      description: 'Bootstrap is a free and open-source front-end library for designing websites and web applications. It contains HTML- and CSS-based design templates for web components. ',
      level: 73
    },
    {
      name: 'HTML5',
      // tslint:disable-next-line:max-line-length
      description: 'HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and current major version of the HTML standard. ',
      level: 85
    },
    {
      name: 'CSS3',
      // tslint:disable-next-line:max-line-length
      description: 'CSS is a style sheet language used for describing the presentation of a document written in a markup language. ',
      level: 67
    },
  ];
  hasAppeared = false;
  constructor() { }

  ngOnInit() {
  }
  appeared() {
    this.hasAppeared = true;
  }
  getColor(stat: number) {
    if (stat < 70) {
      return '#fdd835';
    } else if (stat < 80) {
      return '#f4511e';
    } else {
      return '#ff1744';
    }
  }
}

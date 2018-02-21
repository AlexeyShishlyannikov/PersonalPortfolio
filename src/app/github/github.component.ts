import { Component, OnInit } from '@angular/core';
import { Project } from '../projects.service';
import { GithubService } from '../github.service';
import { trigger, state, style, animate, transition, stagger, query, group, animateChild, keyframes } from '@angular/animations';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  animations: [
    trigger('animateAll', [
      transition('hidden => appeared', [
        query('@closeIn',
          stagger(200, animateChild()))
      ]),
    ]),
    trigger('closeIn', [
      state('hidden', style({
        transform: 'translateX(600px) scale(0.2, 2)',
      })),
      state('appeared', style({
        transform: 'scale(1, 1)',
      })),
      transition('hidden => appeared', [
        animate('0.8s ease-out')
      ])
    ])
  ]
})
export class GithubComponent implements OnInit {
  repos = [
    {
      name: '',
      pushed_at: '',
      description: '',
      language: '',
      html_url: ''
    },
    {
      name: '',
      pushed_at: '',
      description: '',
      language: '',
      html_url: ''
    },
    {
      name: '',
      pushed_at: '',
      description: '',
      language: '',
      html_url: ''
    }
  ];
  projects: Project[] = [];
  hasAppeared = false;

  constructor(
    private github: GithubService
  ) { }

  ngOnInit() {
    this.github.getGithubRepos().subscribe(res => {
      this.repos = res;
    });
  }

  appeared() {
    this.hasAppeared = true;
  }
}

import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition, stagger, query, group, animateChild, keyframes } from '@angular/animations';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  animations: [
    trigger('animateAll', [
      transition('void => *', [
        group([
          query('@fallDown',
            stagger(200, animateChild())),
          query('@comeUp', animateChild()),
          query('@slideLeft', animateChild())
        ]),
      ]
      ),
    ]),
    trigger('fallDown', [
      state('void', style({
        opacity: 0,
        transform: 'translateY(-400px) scale(0.1, 0.1)',
      })),
      transition('void => *', [
        animate('1.2s ease-out')
      ])
    ]),
    trigger('comeUp', [
      state('void', style({
        opacity: 0,
        transform: 'translatey(300px) scale(0.1, 0.1)',
      })),
      transition('void => *', [
        animate('1.2s ease-out')
      ])
    ]),
    trigger('slideLeft', [
      state('void', style({
        opacity: 0,
        transform: 'translateX(400px)',
      })),
      transition('void => *', [
        animate('1.2s ease-out')
      ])
    ])
  ]
})
export class LandingComponent implements OnInit {
  @Output() scrollClick: EventEmitter<string> = new EventEmitter<string>();
  constructor(public myElement: ElementRef) { }

  ngOnInit() {
  }
  scroll(selector: string) {
    this.scrollClick.emit(selector);
  }

}

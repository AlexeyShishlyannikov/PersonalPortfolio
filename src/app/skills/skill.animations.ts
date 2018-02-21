import { trigger, state, style, animate, transition, stagger, query, group, animateChild, keyframes } from '@angular/animations';

export const animateAll = trigger('animateAll', [
  transition('hidden => appeared', group([
    query('@bounceIn',
      stagger(100, animateChild()))
  ])
  ),
]);

export const bounceIn = trigger('bounceIn', [
    state('hidden', style({ opacity: 0, transform: 'translateX(300px) translateY(300px) scale(0.01, 0.01)' })),
    state('appeared', style({ opacity: 1, transform: 'translateX(0px) translateY(0px) scale(1, 1)' })),
    transition('hidden => appeared', [
      animate('1s ease-out', keyframes([
        style({
          offset: 0.7,
          transform: 'translateY(-20px) translateX(-20px)',
          opacity: 1
        }),
        style({
          offset: 1,
          transform: 'translateX(0) translateY(0)'
        })
      ])),
    ])
  ]);

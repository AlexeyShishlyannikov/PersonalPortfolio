import { trigger, transition, state, style, animate, keyframes } from '@angular/animations';

export let fade = trigger('fade', [
  state('hidden', style({ opacity: 0, transform: 'translateY(-300px) scale(1.5, 1.5)',  })),
  transition('hidden => appeared', [
    animate('1s ease-out')
  ])
]);

export let slideUp = trigger('slideUp', [
  state('hidden', style({ opacity: 0, transform: 'translateY(300px)'})),
  transition('hidden => appeared', [
    animate('1s ease-out')
  ])
]);

export let slide = trigger('slide', [
  transition(':enter', [
    style({ transform: 'translateX(-10px)' }),
    animate(2000)
  ])
]);

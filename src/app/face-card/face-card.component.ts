import { Component, OnInit } from '@angular/core';
import { fade } from '../animations';


@Component({
  selector: 'app-face-card',
  templateUrl: './face-card.component.html',
  styleUrls: ['./face-card.component.css'],
  animations: [
    fade
  ]
})
export class FaceCardComponent {
  hasAppeared = false;
  appeared() {
    this.hasAppeared = true;
  }
}

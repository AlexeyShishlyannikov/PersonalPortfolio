import { Component, OnInit } from '@angular/core';
import { slideUp } from '../animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    slideUp
  ]
})
export class AboutComponent {
  hasAppeared = false;
  appeared() {
    this.hasAppeared = true;
  }
}

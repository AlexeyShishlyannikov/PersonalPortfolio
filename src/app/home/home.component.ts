import { Component, OnInit, trigger, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  hasAppeared = false;
  constructor(public myElement: ElementRef) { }

  ngOnInit() {
    // document.addEventListener('scroll', () => {
    //   this.scroll('app-skills');
    // }, true);
  }
  scroll(selector: string) {
    const element = this.myElement.nativeElement.querySelector(selector);
    element.scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'smooth' });
  }

  onAppear() {
    this.hasAppeared = true;
  }
}

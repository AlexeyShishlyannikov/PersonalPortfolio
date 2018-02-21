import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output('toggleSidenav') toggleSidenav: EventEmitter<void> = new EventEmitter<void>();
  constructor() { }
  // @Input() sidenav;
  ngOnInit() {
  }

  openSidenav() {
    this.toggleSidenav.emit();
  }
}

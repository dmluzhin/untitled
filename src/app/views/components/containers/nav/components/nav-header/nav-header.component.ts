import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent implements OnInit {

  constructor() { }

  navClasses = {
    'active': false,
  };

  toggleNavbar() {
    this.navClasses.active = !this.navClasses.active;
  }

  ngOnInit() {
  }

}

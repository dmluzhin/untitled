import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  navbarClasses = {
    'active': false,
  };

  toggleNavbar() {
    this.navbarClasses.active = !this.navbarClasses.active;
  }
  closeNavbar() {
    this.navbarClasses.active = !this.navbarClasses.active;
  }

  ngOnInit() {
  }

}

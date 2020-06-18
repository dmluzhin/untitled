import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { HighlightService} from '../../../../highlight.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, AfterViewChecked {

  blogPost: NavComponent;
  highlighted: boolean = false;

  constructor(private highlightService: HighlightService) { }

  ngAfterViewChecked() {
    if (this.blogPost && !this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }

  ngOnInit() {
  }

  headerCode = `
<nav class="navbar has-shadow">
  <div class="container">
    <div class="navbar-brand">
      <div class="navbar-burger burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="navbar-item" routerLink="/">
        <img src="../../../assets/img/svg/polog-logo.svg"/>
      </div>
    </div>
    <div class="navbar-start">
      <div class="navbar-item navbar-search">
        <div class="search-container">
          <input class="search-input" type="text" placeholder="Поиск"/>
        </div>
      </div>
    </div>
    <div class="navbar-end is-nav">
      <div class="navbar-menu">
        <div class="navbar-item navbar-route active">Опросы</div>
        <div class="navbar-item navbar-route">Результаты</div>
        <div class="navbar-item navbar-route">Новости</div>
        <div class="navbar-item navbar-route">О проекте</div>
      </div>
      <div class="navbar-item navbar-auth">
        <button class="button is-small is-primary is-outlined">Войти</button>
      </div>
    </div>
  </div>
</nav>`;
}

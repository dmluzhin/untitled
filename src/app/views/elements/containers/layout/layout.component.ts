import { Component, AfterViewInit } from '@angular/core';
import { HighlightService} from '../../../../highlight.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements AfterViewInit {

  highlighted: boolean = false;

  constructor(private highlightService: HighlightService) { }

  ngAfterViewInit() {
    if (!this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }

  container = `
<div class="container">
  <div class="notification">
    Здесь есть контейнер <strong>центрированный</strong> на разрешении <code><span class="hljs-symbol">$desktop</span></code>.
  </div>
</div>`;
  fluidContainer = `
<div class="container is-fluid">
  <div class="notification">
    Это резиновый контейнер с сохранением паддингов в 32 пикселя
  </div>
</div>`;
  widescreenContainer = `
<div class="container is-widescreen">
  <div class="notification">
   Этот контейнер занимает всю ширину родительского блока до брейкпоинта <code><span class="hljs-symbol">$widescreen</span></code>.
  </div>
</div>`;
  fullscreenContainer = `
<div class="container is-fullhd">
  <div class="notification">
    Этот контейнер занимает всю ширину родительского блока до брейкпоинта <code><span class="hljs-symbol">$fullscreen</span></code>.
  </div>
</div>
  `;

}

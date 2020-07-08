import { Component, OnInit } from '@angular/core';
import { HighlightService} from '../../../../highlight.service';
@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  blogPost: IconsComponent;
  highlighted: boolean = false;

  constructor(private highlightService: HighlightService) { }

  ngOnInit() {
    if (this.blogPost && !this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }

  iconHtml = `
<svg class="icon icon-large">
  <use xlink:href="#fa-search"></use>
</svg>`;
  iconSizes = `
<div class="icon-box">
  <svg class="icon icon-tiny">
    <use xlink:href="#fa-check-symbol"></use>
  </svg>
</div>

<div class="icon-box">
  <svg class="icon icon-small">
    <use xlink:href="#fa-check-symbol"></use>
  </svg>
</div>

<div class="icon-box">
  <svg class="icon icon-reg">
    <use xlink:href="#fa-check-symbol"></use>
  </svg>
</div>

<div class="icon-box">
  <svg class="icon icon-large">
    <use xlink:href="#fa-check-symbol"></use>
  </svg>
</div>

<div class="icon-box">
  <svg class="icon icon-big">
    <use xlink:href="#fa-check-symbol"></use>
  </svg>
</div>`;
  iconColors = `
<div class="icon-box">
  <svg class="icon icon-large icon-primary">
    <use xlink:href="#fa-multiline_chart"></use>
  </svg>
</div>

<div class="icon-box">
  <svg class="icon icon-large icon-white">
    <use xlink:href="#fa-multiline_chart"></use>
  </svg>
</div>

<div class="icon-box">
  <svg class="icon icon-large icon-black">
    <use xlink:href="#fa-multiline_chart"></use>
  </svg>
</div>

<div class="icon-box">
  <svg class="icon icon-large icon-grey-light">
    <use xlink:href="#fa-multiline_chart"></use>
  </svg>
</div>

<div class="icon-box">
  <svg class="icon icon-large icon-teal">
    <use xlink:href="#fa-multiline_chart"></use>
  </svg>
</div>

<div class="icon-box">
  <svg class="icon icon-large icon-dark-blue">
    <use xlink:href="#fa-multiline_chart"></use>
  </svg>
</div>

<div class="icon-box">
  <svg class="icon icon-large icon-green">
    <use xlink:href="#fa-multiline_chart"></use>
  </svg>
</div>

<div class="icon-box">
  <svg class="icon icon-large icon-orange">
    <use xlink:href="#fa-multiline_chart"></use>
  </svg>
</div>

<div class="icon-box">
  <svg class="icon icon-large icon-red">
    <use xlink:href="#fa-multiline_chart"></use>
  </svg>
</div>`;

}

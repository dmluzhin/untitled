import { Component, OnInit } from '@angular/core';
import { HighlightService} from '../../../../highlight.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  blogPost: CardsComponent;
  highlighted: boolean = false;

  constructor(private highlightService: HighlightService) { }

  ngOnInit() {
    if (this.blogPost && !this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }

  simpleCard = `
<div class="card">
  <div class="card-header">
    <span class="tag tag-green">Опрос пройден</span>
    <div class="tag-group tag-group-column">
      <div class="tag tag-transparent is-right">20 вопросов</div>
    </div>
  </div>
  <div class="card-content">
    <div class="card-header-title">Книги какого жанра вы предпочитаете?</div>
    <p class="paragraph">Опрос населения о том, книги какого жанра наиболее популярно</p>
  </div>
  <div class="card-image">
    <img src="https://fakeimg.pl/1280x960/282828/eae0d0/?retina=1"/>
  </div>
</div>`;

  footerCard = `
<div class="survey-card card">
  <div class="card-header">
    <span class="tag has-margin-right-5">Опрос</span>
    <div class="tag-group tag-group-column">
      <div class="tag tag-transparent is-right">20 вопросов</div>
    </div>
  </div>
  <div class="card-content">
    <div class="card-header-title">Книги какого жанра вы предпочитаете?</div>
    <p class="paragraph">Опрос населения о том, книги какого жанра наиболее популярно</p>
  </div>
  <div class="card-footer">
    <div class="buttons is-flexible is-fullwidth">
      <button class="button is-primary">Пройти опрос</button>
    </div>
  </div>
</div>`;

  type2card = `
<div class="survey-card card type-2">
  <div class="card-header">
    <span class="tag tag-green">Опрос пройден</span>
    <div class="tag-group tag-group-column">
      <div class="tag tag-transparent is-right">20 вопросов</div>
    </div>
  </div>
  <div class="card-content">
    <div class="card-header-title">Книги какого жанра вы предпочитаете?</div>
    <p class="paragraph">Опрос населения о том, книги какого жанра наиболее популярно</p>
  </div>
  <div class="card-footer">
    <div class="buttons is-flexible is-fullwidth">
      <button class="button is-green">Результаты</button>
    </div>
  </div>
</div>`;
}

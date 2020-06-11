import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { HighlightService} from '../../../../highlight.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit, AfterViewChecked  {

  blogPost: ButtonsComponent;
  highlighted: boolean = false;

  constructor(private highlightService: HighlightService) { }

  ngAfterViewChecked() {
    if (this.blogPost && !this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }

  simpleButton = `
<button class="button">Кнопка</button>`;
  buttonTypes = `
<button class="button">Кнопка</button>
<a class="button">Анкорная ссылка</a>
<input class="button" value="Отправить" type="submit">`;
  buttonColors = `
<div class="buttons">
  <button class="button is-primary">Основная кнопка</button>
  <button class="button is-green">Подтвердить</button>
  <button class="button is-orange">Предупреждение</button>
  <button class="button">Вторичная кнопка</button>
  <button class="button" disabled>Неакивная кнопка</button>
</div>`;
  buttonSizes = `
<div class="buttons">
  <button class="button is-primary is-tiny">Крошечная</button>
  <button class="button is-primary is-small">Маленькая</button>
  <button class="button is-primary">Стандартная</button>
  <button class="button is-primary is-medium">Средняя</button>
  <button class="button is-primary is-large">Большая</button>
</div>`;
  buttonAllSizes = `
<div class="buttons are-medium">
  <button class="button is-green">Все</button>
  <button class="button is-green">Кнопки</button>
  <button class="button is-green">Среднего</button>
  <button class="button is-green">Размера</button>
</div>`;
  buttonFlex = `
<div style="width: 300px;">
  <button class="button is-primary is-tiny is-fullwidth">Крошечная</button>
  <button class="button is-primary is-small is-fullwidth">Маленькая</button>
  <button class="button is-primary is-fullwidth">Стандартная</button>
  <button class="button is-primary is-medium is-fullwidth">Средняя</button>
  <button class="button is-primary is-large is-fullwidth">Большая</button>
</div>`
  buttonFlexible = `
<div class="buttons is-flexible" style="width: 100%">
  <button class="button">33%</button>
  <button class="button">33%</button>
  <button class="button">33%</button>
</div>
<div class="buttons is-flexible" style="width: 100%">
  <button class="button">50%</button>
  <button class="button">50%</button>
</div>
<div class="buttons is-flexible" style="width: 100%">
  <button class="button">100%</button>
</div>`
  buttonOutlned = `
<div class="buttons">
  <button class="button is-primary is-outlined">Контурная</button>
  <button class="button is-green is-outlined">Контурная</button>
  <button class="button is-orange is-outlined">Контурная</button>
  <button class="button is-outlined">Контурная</button>
  <button class="button is-outlined" disabled>Контурная</button>
</div>`;

  ngOnInit() {
  }

}

import {AfterViewChecked, Component, OnInit} from '@angular/core';
import { HighlightService} from '../../../../highlight.service';
import { MatDialog } from '@angular/material';
import { DefaultModalComponent} from './components/default-modal/default-modal.component';
import { NormalModalComponent } from './components/normal-modal/normal-modal.component';
import {MediumModalComponent} from './components/medium-modal/medium-modal.component';
import {BigModalComponent} from './components/big-modal/big-modal.component';
import {FluidModalComponent} from './components/fluid-modal/fluid-modal.component';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent implements OnInit, AfterViewChecked {

  blogPost: ModalsComponent;
  highlighted: boolean = false;

  constructor(private highlightService: HighlightService, public dialog: MatDialog) { }

  ngAfterViewChecked() {
    if (this.blogPost && !this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }

  openDialog() {
    this.dialog.open(DefaultModalComponent);
  }
  openNormalDialog() {
    this.dialog.open(NormalModalComponent);
  }
  openMediumDialog() {
    this.dialog.open(MediumModalComponent);
  }
  openBigDialog() {
    this.dialog.open(BigModalComponent);
  }
  openFluidDialog() {
    this.dialog.open(FluidModalComponent);
  }

  defaultModal = `
<div class="mat-dialog-box">
  <div class="content">
    <h4 class="title" mat-dialog-title>Диалоговое окно</h4>
    <div mat-dialog-content>
      <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam eaque est hic ipsum iste iure, magni maiores minima molestiae odit placeat praesentium sed suscipit tempora tempore tenetur vitae voluptatum.</p>
    </div>
  </div>
  <mat-dialog-actions align="end">
    <div class="buttons">
      <button class="button is-outlined" mat-button mat-dialog-close mat-dialog-close="false">Нет</button>
      <button class="button is-primary" mat-button mat-dialog-close>Да</button>
    </div>
  </mat-dialog-actions>
</div>`;
  mediumModal = `
<div class="mat-dialog-box is-medium">
  <div class="mat-dialog-close" mat-dialog-close>
    <svg class="icon" width="12px" height="12px">
      <use xlink:href="#fa-close"></use>
    </svg>
  </div>
  <div class="content">
    <h4 class="title title-primary" mat-dialog-title>Результат опроса</h4>
    <div mat-dialog-content>
      <p class="subtitle">Краткие результаты опроса о потребительском спросе</p>
      <div class="card card-outlined">
        <div class="card-content">
          <h4 class="title">1. Как часто вы покупаете продукты?</h4>
          <div class="survey-result">
            <div class="survey-result-item">
              <div class="survey-result-percent">{{progress1}}%</div>
              <mat-progress-bar class="survey-result-progress" [value]="progress1"></mat-progress-bar>
              <div class="survey-result-name">Часто</div>
            </div>

            <div class="survey-result-item">
              <div class="survey-result-percent">{{progress2}}%</div>
              <mat-progress-bar class="survey-result-progress" [value]="progress2"></mat-progress-bar>
              <div class="survey-result-name">Редко</div>
            </div>
          </div>
        </div>
      </div>

      <div class="card card-outlined">
        <div class="card-content">
          <h4 class="title">2. Каким образом вы покупаете продукты?</h4>
          <div class="survey-result">
            <div class="survey-result-item">
              <div class="survey-result-percent">{{progress3}}%</div>
              <mat-progress-bar class="survey-result-progress" [value]="progress3"></mat-progress-bar>
              <div class="survey-result-name">Через интернет магазин</div>
            </div>

            <div class="survey-result-item">
              <div class="survey-result-percent">{{progress4}}%</div>
              <mat-progress-bar class="survey-result-progress" [value]="progress4"></mat-progress-bar>
              <div class="survey-result-name">В сетевых магазинах оффлайн</div>
            </div>
            <div class="survey-result-item">
              <div class="survey-result-percent">{{progress5}}%</div>
              <mat-progress-bar class="survey-result-progress" [value]="progress5"></mat-progress-bar>
              <div class="survey-result-name">На рынке</div>
            </div>
          </div>
        </div>
      </div>

      <div class="card card-outlined">
        <div class="card-content">
          <h4 class="title">1. Как часто вы покупаете продукты?</h4>
          <div class="survey-result">
            <div class="survey-result-item">
              <div class="survey-result-percent">{{progress6}}%</div>
              <mat-progress-bar class="survey-result-progress" [value]="progress6"></mat-progress-bar>
              <div class="survey-result-name">Мясные продукты</div>
            </div>
            <div class="survey-result-item">
              <div class="survey-result-percent">{{progress7}}%</div>
              <mat-progress-bar class="survey-result-progress" [value]="progress7"></mat-progress-bar>
              <div class="survey-result-name">Овощи и фрукты</div>
            </div>
            <div class="survey-result-item">
              <div class="survey-result-percent">{{progress8}}%</div>
              <mat-progress-bar class="survey-result-progress" [value]="progress8"></mat-progress-bar>
              <div class="survey-result-name">Молочные продукты</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <mat-dialog-actions align="end">
    <div class="buttons">
      <button class="button" mat-button mat-dialog-close mat-dialog-close="false">Закрыть</button>
      <button class="button is-primary" mat-button mat-dialog-close>Тоже закрыть</button>
    </div>
  </mat-dialog-actions>
</div>`;
  normalModal = `
<div class="mat-dialog-box is-normal">
  <div class="mat-dialog-close" mat-dialog-close>
    <svg class="icon" width="12px" height="12px">
      <use xlink:href="#fa-close"></use>
    </svg>
  </div>
  <div class="content">
    <h4 class="title" mat-dialog-title>Диалоговое окно</h4>
    <div mat-dialog-content>
      <p class="paragraph">Согласны? Узнали?</p>
      <P class="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias asperiores aspernatur, atque debitis dolorum, eaque facilis illo, iure nulla suscipit vero? Amet in laborum maiores neque non saepe veniam.</P>
      <div class="field">
        <mat-form-field class="is-fullwidth">
          <mat-label>Согласны? Узнали?</mat-label>
          <mat-select>
            <mat-option *ngFor="let hero of heroes" [value]="hero.value">
              {{hero.viewValue}}
            </mat-option>
          </mat-select>
        </mat-form-field>
      </div>
    </div>
  </div>
  <mat-dialog-actions align="end">
    <div class="buttons">
      <button class="button" mat-button mat-dialog-close mat-dialog-close="false">Закрыть</button>
      <button class="button is-primary" mat-button mat-dialog-close>Тоже закрыть</button>
    </div>
  </mat-dialog-actions>
</div>

  `;
  bigModal = `
<div class="mat-dialog-box is-big">
  <div class="mat-dialog-close" mat-dialog-close>
    <svg class="icon" width="12px" height="12px">
      <use xlink:href="#fa-close"></use>
    </svg>
  </div>
  <div class="content">
    <h2 class="title" mat-dialog-title>Большая модалка. Больше текста. Больше всего.</h2>
    <div mat-dialog-content>
      <div class="content">
        <h2 class="title">Глава 1. Мальчик, который выжил</h2>
        <p class="paragraph">Мистер и миссис <em>Дурсль</em> проживали в доме номер четыре по Тисовой улице и всегда с гордостью заявляли, что они, слава богу, абсолютно нормальные люди. Уж от кого-кого, а от них никак нельзя было ожидать, чтобы они попали в какую-нибудь странную или загадочную ситуацию. Мистер и миссис <em>Дурсль</em> весьма неодобрительно относились к любым странностям, загадкам и прочей ерунде.</p>
        <p class="paragraph"><strong>Мистер <em>Дурсль</em></strong> возглавлял фирму под названием <em>«Граннингс»</em>, которая специализировалась на производстве дрелей. Это был полный мужчина с очень пышными усами и очень короткой шеей. Что же касается миссис <em>Дурсль</em>, она была тощей блондинкой с шеей почти вдвое длиннее, чем положено при ее росте. Однако этот недостаток пришелся ей весьма кстати, поскольку большую часть времени миссис <em>Дурсль</em> следила за соседями и подслушивала их разговоры. А с такой шеей, как у нее, было очень удобно заглядывать за чужие заборы. У мистера и миссис <em>Дурсль</em> был маленький сын по имени Дадли, и, по их мнению, он был самым чудесным ребенком на свете.</p>
        <h3 class="title">Действующие лица</h3>
        <img src="../../../../../../../assets/img/hagrid.png"/>
        <ul>
          <li><strong>Вернон Дурсль</strong> — муж родной тётки Гарри Поттера с материнской стороны. Магл до мозга костей, человек, совершенно лишённый воображения</li>
          <li><strong>Петуния Дурсль</strong> — старшая дочь Мистера и Миссис Эванс, сестра маглорожденной волшебницы Лили Эванс.
            В отличие от сестры, не обладала волшебными способностями и очень расстраивалась из-за этого</li>
          <li><strong>Дадли Дурсль</strong> — двоюродный брат Гарри Поттера, старше его на месяц. На его одиннадцатый День рождения случилось неприятное происшествие с удавом, после которого Гарри Поттера наказали «до наступления летних каникул».</li>
        </ul>
      </div>
    </div>
  </div>
  <mat-dialog-actions align="end">
    <div class="buttons">
      <button class="button" mat-button mat-dialog-close mat-dialog-close="false">Закрыть</button>
      <button class="button is-primary" mat-button mat-dialog-close>Тоже закрыть</button>
    </div>
  </mat-dialog-actions>
</div>`;
  fluidModal = `
<div class="mat-dialog-box is-fluid">
  <div class="mat-dialog-close" mat-dialog-close>
    <svg class="icon" width="12px" height="12px">
      <use xlink:href="#fa-close"></use>
    </svg>
  </div>
  <div class="content">
    <h2 class="title" mat-dialog-title>Резиновая модалка. Настраивается. Скорее всего займет максимум свободного пространства</h2>
    <div mat-dialog-content>
      <div class="content">
        <h2 class="title">Глава 1. Мальчик, который выжил</h2>
        <p class="paragraph">Мистер и миссис <em>Дурсль</em> проживали в доме номер четыре по Тисовой улице и всегда с гордостью заявляли, что они, слава богу, абсолютно нормальные люди. Уж от кого-кого, а от них никак нельзя было ожидать, чтобы они попали в какую-нибудь странную или загадочную ситуацию. Мистер и миссис <em>Дурсль</em> весьма неодобрительно относились к любым странностям, загадкам и прочей ерунде.</p>
        <p class="paragraph"><strong>Мистер <em>Дурсль</em></strong> возглавлял фирму под названием <em>«Граннингс»</em>, которая специализировалась на производстве дрелей. Это был полный мужчина с очень пышными усами и очень короткой шеей. Что же касается миссис <em>Дурсль</em>, она была тощей блондинкой с шеей почти вдвое длиннее, чем положено при ее росте. Однако этот недостаток пришелся ей весьма кстати, поскольку большую часть времени миссис <em>Дурсль</em> следила за соседями и подслушивала их разговоры. А с такой шеей, как у нее, было очень удобно заглядывать за чужие заборы. У мистера и миссис <em>Дурсль</em> был маленький сын по имени Дадли, и, по их мнению, он был самым чудесным ребенком на свете.</p>
        <h3 class="title">Действующие лица</h3>
        <img src="../../../../../../../assets/img/hagrid.png"/>
        <ul>
          <li><strong>Вернон Дурсль</strong> — муж родной тётки Гарри Поттера с материнской стороны. Магл до мозга костей, человек, совершенно лишённый воображения</li>
          <li><strong>Петуния Дурсль</strong> — старшая дочь Мистера и Миссис Эванс, сестра маглорожденной волшебницы Лили Эванс.
            В отличие от сестры, не обладала волшебными способностями и очень расстраивалась из-за этого</li>
          <li><strong>Дадли Дурсль</strong> — двоюродный брат Гарри Поттера, старше его на месяц. На его одиннадцатый День рождения случилось неприятное происшествие с удавом, после которого Гарри Поттера наказали «до наступления летних каникул».</li>
        </ul>
      </div>
    </div>
  </div>
  <mat-dialog-actions align="end">
    <div class="buttons">
      <button class="button" mat-button mat-dialog-close mat-dialog-close="false">Закрыть</button>
      <button class="button is-primary" mat-button mat-dialog-close>Тоже закрыть</button>
    </div>
  </mat-dialog-actions>
</div> `;

  ngOnInit() {
  }

}

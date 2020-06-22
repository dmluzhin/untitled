import { Component, OnInit, AfterViewChecked} from '@angular/core';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { HighlightService } from '../../../../highlight.service';

@Component({
  selector: 'app-popups',
  templateUrl: './popups.component.html',
  styleUrls: ['./popups.component.scss']
})
export class PopupsComponent implements OnInit, AfterViewChecked {

  blogPost: PopupsComponent;
  highlighted: boolean = false;

  constructor(private highlightService: HighlightService, private _snackBar: MatSnackBar) {}

  ngAfterViewChecked() {
    if (this.blogPost && !this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.openFromComponent(PrimarySnackComponent, {
      panelClass: 'is-primary-snack',
      duration: 2500,
      horizontalPosition: 'left',
      verticalPosition: 'bottom',
    });
  }

  openOrangeSnackBar(message: string, action: string) {
    this._snackBar.openFromComponent(OrangeSnackComponent, {
      panelClass: 'is-orange-snack',
      duration: 2500,
      horizontalPosition: 'left',
      verticalPosition: 'bottom',
    });
  }

  openGreenSnackBar(message: string, action: string) {
    this._snackBar.openFromComponent(GreenSnackComponent, {
      panelClass: 'is-green-snack',
      duration: 2500,
      horizontalPosition: 'left',
      verticalPosition: 'bottom',
    });
  }

  openRedSnackBar(message: string, action: string) {
    this._snackBar.openFromComponent(OrangeSnackComponent, {
      panelClass: 'is-red-snack',
      duration: 2500,
      horizontalPosition: 'left',
      verticalPosition: 'bottom',
    });
  }

  ngOnInit() {
  }

  snackHtml = `
<div class="buttons">
  <button class="button is-outlined is-primary" (click)="openSnackBar()">Успешный снэк</button>
  <button class="button is-outlined is-orange" (click)="openOrangeSnackBar()">Тревожный снэк</button>
  <button class="button is-outlined is-green" (click)="openGreenSnackBar()">Подтверждающий снэк</button>
  <button class="button is-outlined is-warning" (click)="openRedSnackBar()">Опасный снэк</button>
</div>  
`;

  snackTS = `
  @Component({
  selector: 'primary-snack',
  templateUrl: './primary-snack.html',
})
export class PrimarySnackComponent {}

@Component({
  selector: 'orange-snack',
  templateUrl: './orange-snack.html',
})
export class OrangeSnackComponent {}

@Component({
  selector: 'green-snack',
  templateUrl: './green-snack.html',
})
export class GreenSnackComponent {}

@Component({
  selector: 'red-snack',
  templateUrl: './red-snack.html',
})
export class RedSnackComponent {}
  `;
  menuHtml1 = `
<button class="button is-outlined is-primary" mat-button [matMenuTriggerFor]="aboveMenu">Вверх</button>
<mat-menu #aboveMenu="matMenu" yPosition="above">
  <div class="mat-menu-header">
    <div class="mat-menu-header-icon">
      <img ngxGravatar [email]="'example@mail.com'" size="45"/>
    </div>
    <div class="mat-menu-header-name">Гарри Поттер</div>
    <div class="mat-menu-header-mail">gpotter@mail.ru</div>
  </div>
  <button mat-menu-item>
    <svg class="icon icon-large" width="32px" height="32px">
      <use xlink:href="#fa-person_outline"></use>
    </svg>
    Личный кабинет
  </button>
  <button mat-menu-item>
    <svg class="icon icon-large" width="32px" height="32px">
      <use xlink:href="#fa-settings"></use>
    </svg>
    Настройки
  </button>
  <button mat-menu-item>
    <svg class="icon icon-large" width="32px" height="32px">
      <use xlink:href="#fa-exit_to_app"></use>
    </svg>
    Выход
  </button>
</mat-menu>`;
  menuHtml2 = `
<button class="button is-outlined is-primary" mat-button [matMenuTriggerFor]="afterMenu">Вниз</button>
<mat-menu #afterMenu="matMenu" xPosition="after">
  <div class="mat-menu-header">
    <div class="mat-menu-header-icon">
      <img ngxGravatar [email]="'example@mail.com'" size="45"/>
    </div>
    <div class="mat-menu-header-name">Гарри Поттер</div>
    <div class="mat-menu-header-mail">gpotter@mail.ru</div>
  </div>
  <button mat-menu-item>
    <svg class="icon icon-large" width="32px" height="32px">
      <use xlink:href="#fa-person_outline"></use>
    </svg>
    Личный кабинет
  </button>
  <button mat-menu-item>
    <svg class="icon icon-large" width="32px" height="32px">
      <use xlink:href="#fa-settings"></use>
    </svg>
    Настройки
  </button>
  <button mat-menu-item>
    <svg class="icon icon-large" width="32px" height="32px">
      <use xlink:href="#fa-exit_to_app"></use>
    </svg>
    Выход
  </button>
</mat-menu>`;

  tooltipHtml1 = `
<button class="button is-outlined" matTooltip="Слева" [matTooltipPosition]="'left'">Слева</button>
<button class="button is-outlined" matTooltip="Сверху" [matTooltipPosition]="'above'">Сверху</button>
<button class="button is-outlined" matTooltip="Справа" [matTooltipPosition]="'right'">Справа</button>
<button class="button is-outlined" matTooltip="Снизу" [matTooltipPosition]="'below'">Снизу</button>`;
  tooltipHtml2 = `
<span
  class="footnote has-margin-right-5"
  matTooltip="Слева"
  #leftTooltip="matTooltip"
  [matTooltipPosition]="'left'"
  (click)="leftTooltip.show()">
  Слева
</span>
<span
  class="footnote has-margin-right-5"
  matTooltip="Сверху"
  #topTooltip="matTooltip"
  [matTooltipPosition]="'above'"
  (click)="topTooltip.toggle()">
  Сверху
</span>
<span
  class="footnote has-margin-right-5"
  matTooltip="Справа"
  #rightTooltip="matTooltip"
  [matTooltipPosition]="'right'"
  (click)="rightTooltip.toggle()">
  Справа
</span>
<span
  class="footnote has-margin-right-5"
  matTooltip="Снизу"
  #bottomTooltip="matTooltip"
  [matTooltipPosition]="'below'"
  (click)="bottomTooltip.toggle()">
  Снизу
</span>`;
}
@Component({
  selector: 'primary-snack',
  templateUrl: './primary-snack.html',
})
export class PrimarySnackComponent {}

@Component({
  selector: 'orange-snack',
  templateUrl: './orange-snack.html',
})
export class OrangeSnackComponent {}

@Component({
  selector: 'green-snack',
  templateUrl: './green-snack.html',
})
export class GreenSnackComponent {}

@Component({
  selector: 'red-snack',
  templateUrl: './red-snack.html',
})
export class RedSnackComponent {}

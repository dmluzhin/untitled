import {Component, AfterViewChecked} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { HighlightService} from '../../../../highlight.service';

interface Hero {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements AfterViewChecked {

  blogPost: FormsComponent;
  highlighted: boolean = false;

  constructor(private highlightService: HighlightService) { }

  ngAfterViewChecked() {
    if (this.blogPost && !this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }

  snippetForm = `
<form class="snippet-form">
   <div class="control">
     <mat-form-field class="is-fullwidth">
       <mat-label>Логин</mat-label>
       <input matInput placeholder="Введите имя">
     </mat-form-field>
   </div>

   <div class="control">
     <mat-form-field class="is-fullwidth">
       <mat-label>Email</mat-label>
       <input matInput [formControl]="emailFormControl" placeholder="example@polog.ru">
       <mat-error *ngIf="emailFormControl.hasError('email') && !emailFormControl.hasError('required')">
         Пожалуйста, введите корректный Email
       </mat-error>
       <mat-error *ngIf="emailFormControl.hasError('required')">
         Email необходим к заполнению
       </mat-error>
     </mat-form-field>
   </div>

   <div class="control">
     <mat-form-field class="is-fullwidth">
       <mat-label>Оставить комментарий</mat-label>
       <textarea matInput placeholder="Оставьте комментарий"></textarea>
     </mat-form-field>
   </div>
</form>`;

  snippetFormTs= `
import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

/**
 * @title Input with error messages
 */
@Component({
  selector: 'input-errors-example',
  templateUrl: 'input-errors-example.html',
  styleUrls: ['input-errors-example.css'],
})
export class InputErrorsExample {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
}`;

  matInput = `
<div class="field">
  <mat-form-field class="is-fullwidth">
    <mat-label>Кликните и введите текст, чтобы посмотреть состояния</mat-label>
    <input matInput placeholder="Введите имя">
  </mat-form-field>
</div>
<div class="field">

<mat-form-field class="is-fullwidth" >
  <mat-label>Disabled</mat-label>
  <input matInput placeholder="Disabled" disabled>
</mat-form-field>
</div>`;

  matSelect = `
<div class="field">
  <mat-form-field class="is-fullwidth">
    <mat-label>Любимый герой из Resident Evil</mat-label>
    <mat-select>
      <mat-option *ngFor="let hero of heroes" [value]="hero.value">
        {{hero.viewValue}}
      </mat-option>
    </mat-select>
  </mat-form-field>
</div>`;

  matSelectTS = `
import {Component} from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

/**
 * @title Basic select
 */
@Component({
  selector: 'select-overview-example',
  templateUrl: 'select-overview-example.html',
  styleUrls: ['select-overview-example.css'],
})
export class SelectOverviewExample {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
}
`;

  matMultiSelect = `
<div class="field">
  <mat-form-field class="is-fullwidth">
    <mat-label>Любимый герой из Resident Evil</mat-label>
    <mat-select [formControl]="toppings" multiple>
      <mat-option *ngFor="let topping of toppingList" [value]="topping">{{topping}}</mat-option>
    </mat-select>
  </mat-form-field>
</div>
  `;
  matMultiSelectTS = `
import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

/** @title Select with multiple selection */
@Component({
  selector: 'select-multiple-example',
  templateUrl: 'select-multiple-example.html',
  styleUrls: ['select-multiple-example.css'],
})
export class SelectMultipleExample {
  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
}`;

  matCheckbox = `
<div class="field">
  <mat-checkbox class="has-margin-right-30" checked="true" ></mat-checkbox>
  <mat-checkbox class="has-margin-right-30"></mat-checkbox>
  <mat-checkbox disabled="true"></mat-checkbox>
</div>
<div class="field">
  <mat-checkbox class="" checked="true" >Стандартный отмеченный чекбокс (checked: true)</mat-checkbox>
</div>
<div class="field">
  <mat-checkbox class="">Стандартный не отмеченный радиобаттон (checked: false)</mat-checkbox>
</div>
<div class="field">
  <mat-checkbox disabled="true">Стандартный отключенный радиобаттон (disabled)</mat-checkbox>
</div>
`;
  matCheckboxBlock  = `
<div class="field">
  <mat-checkbox class="mat-checkbox-block" checked="true" >Стандартный отмеченный чекбокс (checked: true)</mat-checkbox>
</div>
<div class="field">
  <mat-checkbox class="mat-checkbox-block">Стандартный не отмеченный чекбокс (checked: false)</mat-checkbox>
</div>
<div class="field">
  <mat-checkbox class="mat-checkbox-block disabled" disabled="true">Стандартный отключенный чекбокс (disabled)</mat-checkbox>
</div>`;
  matRadioBlock = `
<div class="field">
    <mat-radio-button class="mat-radio-block" checked="true" >Стандартный отмеченный радиобаттон (checked: true)</mat-radio-button>
  </div>
  <div class="field">
    <mat-radio-button class="mat-radio-block">Стандартный не отмеченный радиобаттон (checked: false)</mat-radio-button>
  </div>
  <div class="field">
    <mat-radio-button class="mat-radio-block disabled" disabled="true">Стандартный отключенный радиобаттон (disabled)</mat-radio-button>
  </div>
</div>`;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  heroes: Hero[] = [
    {value: 'leon-0', viewValue: 'Леон Кеннеди'},
    {value: 'ada-1', viewValue: 'Ада Вонг'},
    {value: 'claire-2', viewValue: 'Клэр Рэдфилд'}
  ];

  toppings = new FormControl();
  toppingList: string[] = ['Леон Кеннеди', 'Ада Вонг', 'Клэр Рэдфилд', 'Крис Рэдфилд', 'Итан Уинтерс', 'Джилл Валентайн'];

}

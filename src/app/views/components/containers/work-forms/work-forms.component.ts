import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HighlightService} from '../../../../highlight.service';
@Component({
  selector: 'app-work-forms',
  templateUrl: './work-forms.component.html',
  styleUrls: ['./work-forms.component.scss']
})
export class WorkFormsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  signin: FormGroup = new FormGroup({
    login: new FormControl('', [Validators.required, Validators.required ]),
    password: new FormControl('', [Validators.required, Validators.min(3) ])
  });
  hide = true;
  get loginInput() { return this.signin.get('login'); }
  get passwordInput() { return this.signin.get('password'); }

  authForm = `
<div class="auth-form">
  <form class="card-form card" [formGroup]="signin">
    <div class="card-form-header">
      <div class="card-form-header-logo">
        <img src="../../../../../assets/img/svg/polog-logo.svg"/>
      </div>
    </div>
    <div class="card-content">
      <div class="control">
        <mat-form-field class="is-fullwidth">
          <mat-label>Логин</mat-label>
          <input matInput
                 formControlName="login"
                 placeholder="Введите имя">
        </mat-form-field>
      </div>
      <div class="control">
        <mat-form-field class="is-fullwidth">
          <mat-label>Пароль</mat-label>
          <input matInput
                 formControlName="password"
                 placeholder="Введите пароль"
                 type="password"
                 [type]="hide ? 'password' : 'text'">
          <div class="reminder">
            <span class="toggle-show-more" (click)="hide = !hide">{{hide ? 'Показать' : 'Скрыть'}}</span>
            <!--<span class="toggle-show-less">Скрыть</span>-->
          </div>
          <mat-error *ngIf="!passwordInput.value">Введите пароль</mat-error>
          <div class="forgot">
            <a class="link">Забыли пароль?</a>
          </div>
        </mat-form-field>
      </div>
    </div>
    <div class="card-form-footer">
      <div class="buttons">
        <button class="button is-fullwidth" disabled>Войти</button>
      </div>
      <div class="divider">
        <span class="divider-text">или</span>
      </div>
      <div class="buttons">
        <a class="button is-outlined is-fullwidth">Зарегистрироваться</a>
      </div>
      <div class="card-form-footer-links">
        <a class="link">Политика конфиденциальности</a>
      </div>
    </div>
  </form>
</div>
  `;
}

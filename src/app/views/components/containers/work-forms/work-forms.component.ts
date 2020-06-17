import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HighlightService} from '../../../../highlight.service';
import {Status} from 'tslint/lib/runner';

interface Region {
  value: string;
  viewValue: string;
}
interface Education {
  value: string;
  viewValue: string;
}

interface Profession {
  value: string;
  viewValue: string;
}

interface Interest {
  value: string;
  viewValue: string;
}

interface Gender {
  value: string;
  viewValue: string;
}

interface Agegroup {
  value: string;
  viewValue: string;
}

interface Fstate {
  value: string;
  viewValue: string;
}

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

  registration: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email ]),
    login: new FormControl('', [Validators.required, Validators.min(6) ])
  });

  restore: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email ]),
  });

  socdem: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email ]),
  });

  newpass: FormGroup = new FormGroup({
    oldpassword: new FormControl('', [Validators.required, Validators.min(3) ]),
    newpassword: new FormControl('', [Validators.required, Validators.min(3) ]),
    repeatpassword: new FormControl('', [Validators.required, Validators.min(3) ]),
  });

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  emailRestoreFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  hide = true;
  oldpasswordHide = true;
  newpasswordHide = true;
  repeatpasswordHide = true;
  get loginInput() {
    return this.signin.get('login');
  }
  get passwordInput() {
    return this.signin.get('password');
  }
  get regLoginInput() {
    return this.registration.get('login');
  }
  get emailInput() {
    return this.registration.get('email');
  }
  get oldpasswordInput() {
    return this.newpass.get('oldpassword');
  }
  get newpasswordInput() {
    return this.newpass.get('newpassword');
  }
  get repeatpasswordInput() {
    return this.newpass.get('repeatpassword');
  }

  regions: Region[] = [
    {value: 'mos-0', viewValue: 'Москва, Московская область'},
    {value: 'yar-1', viewValue: 'Ярославль, Ярославская область'},
    {value: 'ros-2', viewValue: 'Ростов, Ростовсая область'},
    {value: 'ekt-3', viewValue: 'Екатеринбург, Екатеринбургская область'},
    {value: 'vol-4', viewValue: 'Волгоград, Волгоградская область'}
  ];

  educations: Education[] = [
    {value: 'high-0', viewValue: 'Высшее образование'},
    {value: 'middle-spec-1', viewValue: 'Среднее специальное образование'},
    {value: 'middle-2', viewValue: 'Среднее образование'},
    {value: 'low-3', viewValue: 'Среднее незаконченное образование'},
    {value: 'no-4', viewValue: 'Без образования'}
  ];

  professions: Profession[] = [
    {value: 'work-0', viewValue: 'Инженер-программист'},
    {value: 'work-1', viewValue: 'UI/UX - дизайнер'},
    {value: 'work-2', viewValue: 'Плотник'},
    {value: 'work-3', viewValue: 'Сварщик'},
    {value: 'work-4', viewValue: 'Повар'}
  ];

  interests: Interest[] = [
    {value: 'interest-0', viewValue: 'Спорт'},
    {value: 'interest-1', viewValue: 'Паззлы'},
    {value: 'interest-2', viewValue: 'Программирование'},
    {value: 'interest-3', viewValue: 'Компьютерные игры'},
    {value: 'interest-4', viewValue: 'Настольные игры'}
  ];

  genders : Gender[] = [
    {value: 'gender-0', viewValue: 'Мужской'},
    {value: 'gender-1', viewValue: 'Женский'},
  ];

  agegroups: Agegroup[] = [
    {value: 'age-0', viewValue: 'От 17 до 21 года'},
    {value: 'age-1', viewValue: 'От 21 до 35 лет'},
    {value: 'age-2', viewValue: 'От 35 до 55 лет'},
    {value: 'age-3', viewValue: 'От 55 до 75 лет'},
    {value: 'age-4', viewValue: 'От 75 до 90 лет'},
    {value: 'age-5', viewValue: 'От 90 лет и более'},
  ];

  fstates: Fstate[] = [
    {value: 'fstate-0', viewValue: 'Холост'},
    {value: 'fstate-1', viewValue: 'Женат / Замужем'},
  ];

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
</div>`;

  regForm = `
<div class="reg-form">
  <form class="card-form card" [formGroup]="registration">
    <div class="card-form-header">
      <div class="card-form-header-logo">
        <img src="../../../../../assets/img/svg/polog-logo.svg"/>
      </div>
    </div>
    <div class="card-content">
      <h6 class="title has-margin-bottom-5">Регистрация</h6>
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
          <mat-label>Придумайте логин</mat-label>
          <input matInput
                 formControlName="login"
                 placeholder="Введите логин"
                 type="text">
          <mat-error *ngIf="!regLoginInput.value">Минимум 6 символов</mat-error>
        </mat-form-field>
      </div>
    </div>
    <div class="card-form-footer">
      <div class="buttons">
        <button class="button is-primary is-fullwidth" disabled>Зарегистрироваться</button>
      </div>
      <div class="card-form-footer-links has-text-left">
        <p class="subtext has-margin-bottom-10">Нажимая “Зарегистрироваться”:</p>
        <p class="subtext">Я принимаю условия <a class="link">Пользовательского соглашения</a> и даю своё согласие Пологу на обработку моей персональной информации на условиях, определенных
          <a class="link">Политикой конфиденциальности</a>.</p>
      </div>
      <div class="divider">
        <span class="divider-text">Уже есть аккаунт?</span>
      </div>
      <div class="buttons">
        <a class="button is-outlined is-fullwidth">Войти</a>
      </div>
    </div>
  </form>
</div>`;

  restoreForm = `
<div class="restore-form">
  <form class="card-form card" [formGroup]="restore">
    <div class="card-form-header">
      <div class="card-form-header-logo">
        <img src="../../../../../assets/img/svg/polog-logo.svg"/>
      </div>
    </div>
    <div class="card-content">
      <h6 class="title has-margin-bottom-5">Восстановление пароля</h6>
      <div class="control">
        <mat-form-field class="is-fullwidth">
          <mat-label>Email</mat-label>
          <input matInput [formControl]="emailRestoreFormControl" placeholder="example@polog.ru">
          <mat-error *ngIf="emailRestoreFormControl.hasError('email') && !emailRestoreFormControl.hasError('required')">
            Пожалуйста, введите корректный Email
          </mat-error>
          <mat-error *ngIf="emailRestoreFormControl.hasError('required')">
            Email необходим к заполнению
          </mat-error>
        </mat-form-field>
      </div>
    </div>
    <div class="card-form-footer">
      <div class="buttons">
        <button class="button is-primary is-fullwidth" disabled>Получить пароль</button>
      </div>
    </div>
  </form>
</div>`;

  socdemForm = `
<div class="socdem-form">
  <form class="card-form card" [formGroup]="restore">
    <div class="card-form-header">
      <div class="card-form-header-logo">
        <img src="../../../../../assets/img/svg/polog-logo.svg"/>
      </div>
    </div>
    <div class="card-content">
      <h6 class="title has-margin-bottom-10">Спасибо за регистрацию. Пароль направлен на указанную почту</h6>
      <p class="paragraph is-normal">Чтобы наши опросы были точнее, пожалуйста, заполните форму ниже</p>
      <div class="field is-bottom-marginless">
        <mat-form-field class="is-fullwidth">
          <mat-label>Выберите регион</mat-label>
          <mat-select>
            <mat-option *ngFor="let region of regions" [value]="region.value">
              {{region.viewValue}}
            </mat-option>
          </mat-select>
        </mat-form-field>
      </div>
      <div class="field is-bottom-marginless">
        <mat-form-field class="is-fullwidth">
          <mat-label>Выберите образование</mat-label>
          <mat-select>
            <mat-option *ngFor="let education of educations" [value]="education.value">
              {{education.viewValue}}
            </mat-option>
          </mat-select>
        </mat-form-field>
      </div>
      <div class="field is-bottom-marginless">
        <mat-form-field class="is-fullwidth">
          <mat-label>Выберите образование</mat-label>
          <mat-select>
            <mat-option *ngFor="let profession of professions" [value]="profession.value">
              {{profession.viewValue}}
            </mat-option>
          </mat-select>
        </mat-form-field>
      </div>
      <div class="field is-bottom-marginless">
        <mat-form-field class="is-fullwidth">
          <mat-label>Интересы</mat-label>
          <mat-select>
            <mat-option *ngFor="let interest of interests" [value]="interest.value">
              {{interest.viewValue}}
            </mat-option>
          </mat-select>
        </mat-form-field>
      </div>
      <div class="field is-bottom-marginless">
        <mat-form-field class="is-fullwidth">
          <mat-label>Пол</mat-label>
          <mat-select>
            <mat-option *ngFor="let gender of genders" [value]="gender.value">
              {{gender.viewValue}}
            </mat-option>
          </mat-select>
        </mat-form-field>
      </div>
      <div class="field is-bottom-marginless">
        <mat-form-field class="is-fullwidth">
          <mat-label>Возрастная группа</mat-label>
          <mat-select>
            <mat-option *ngFor="let agegroup of agegroups" [value]="agegroup.value">
              {{agegroup.viewValue}}
            </mat-option>
          </mat-select>
        </mat-form-field>
      </div>
      <div class="field is-bottom-marginless">
        <mat-form-field class="is-fullwidth">
          <mat-label>Возрастная группа</mat-label>
          <mat-select>
            <mat-option *ngFor="let fstate of fstates" [value]="fstate.value">
              {{fstate.viewValue}}
            </mat-option>
          </mat-select>
        </mat-form-field>
      </div>
      <div class="buttons">
        <button class="button is-primary is-fullwidth" disabled>Сохранить</button>
        <button class="button is-outlined is-fullwidth">Заполнить позже</button>
      </div>
    </div>
  </form>
</div>`;

  changePassForm = `
<div class="new-pass-form">
  <form class="card-form card" [formGroup]="newpass">
    <div class="card-form-header"></div>
    <div class="card-content">
      <mat-form-field class="is-fullwidth">
        <mat-label>Старый пароль</mat-label>
        <input matInput
               formControlName="oldpassword"
               placeholder="Старый пароль"
               [type]="oldpasswordHide ? 'password' : 'text'">
        <div class="reminder">
          <span class="toggle-show-more" (click)="oldpasswordHide = !oldpasswordHide">{{oldpasswordHide ? 'Показать' : 'Скрыть'}}</span>
        </div>
        <mat-error *ngIf="!oldpasswordInput.value">Введите старый пароль</mat-error>
        <div class="forgot">
          <a class="link">Забыли пароль?</a>
        </div>
      </mat-form-field>
      <mat-form-field class="is-fullwidth">
        <mat-label>Новый пароль</mat-label>
        <input matInput
               formControlName="newpassword"
               placeholder="Новый пароль"
               [type]="newpasswordHide ? 'password' : 'text'">
        <div class="reminder">
          <span class="toggle-show-more" (click)="newpasswordHide = !newpasswordHide">{{newpasswordHide ? 'Показать' : 'Скрыть'}}</span>
        </div>
        <mat-error *ngIf="!newpasswordInput.value">Введите новый пароль</mat-error>
        <div class="forgot">
          <a class="link">Забыли пароль?</a>
        </div>
      </mat-form-field>
      <mat-form-field class="is-fullwidth">
        <mat-label>Повторите пароль</mat-label>
        <input matInput
               formControlName="repeatpassword"
               placeholder="Повторите пароль"
               [type]="repeatpasswordHide ? 'password' : 'text'">
        <div class="reminder">
          <span class="toggle-show-more" (click)="repeatpasswordHide = !repeatpasswordHide">{{repeatpasswordHide ? 'Показать' : 'Скрыть'}}</span>
        </div>
        <mat-error *ngIf="!repeatpasswordInput.value">Повторите пароль</mat-error>
        <div class="forgot">
          <a class="link">Забыли пароль?</a>
        </div>
      </mat-form-field>
    </div>
  </form>
</div>`;
}

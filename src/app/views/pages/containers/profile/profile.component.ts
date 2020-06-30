import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ChangePassModalComponent} from '../../components/modals/change-pass-modal/change-pass-modal.component';

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
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  socdemProfile: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email ]),
  });

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

  openChangePass() {
    this.dialog.open(ChangePassModalComponent);
  }

}

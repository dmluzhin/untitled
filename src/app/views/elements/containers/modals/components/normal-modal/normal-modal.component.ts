import { Component, OnInit } from '@angular/core';
interface Hero {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-normal-modal',
  templateUrl: './normal-modal.component.html',
  styleUrls: ['./normal-modal.component.scss']
})
export class NormalModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  heroes: Hero[] = [
    {value: 'choose-0', viewValue: 'Согласен'},
    {value: 'choose-1', viewValue: 'Узнал'}
  ];

}

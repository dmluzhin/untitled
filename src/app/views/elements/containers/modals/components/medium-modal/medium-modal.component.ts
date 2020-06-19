import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medium-modal',
  templateUrl: './medium-modal.component.html',
  styleUrls: ['./medium-modal.component.scss']
})
export class MediumModalComponent implements OnInit {

  public progress1: number = 74;
  public progress2: number = 26;
  public progress3: number = 55;
  public progress4: number = 32;
  public progress5: number = 13;
  public progress6: number = 55;
  public progress7: number = 42;
  public progress8: number = 3;
  constructor() { }

  ngOnInit() {
  }

}

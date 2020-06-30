import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
interface Hero {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-change-pass-modal',
  templateUrl: './change-pass-modal.component.html',
  styleUrls: ['./change-pass-modal.component.scss']
})
export class ChangePassModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  newpass: FormGroup = new FormGroup({
    oldpassword: new FormControl('', [Validators.required, Validators.min(3) ]),
    newpassword: new FormControl('', [Validators.required, Validators.min(3) ]),
    repeatpassword: new FormControl('', [Validators.required, Validators.min(3) ]),
  });

  hide = true;
  oldpasswordHide = true;
  newpasswordHide = true;
  repeatpasswordHide = true;

  get oldpasswordInput() {
    return this.newpass.get('oldpassword');
  }
  get newpasswordInput() {
    return this.newpass.get('newpassword');
  }
  get repeatpasswordInput() {
    return this.newpass.get('repeatpassword');
  }

}

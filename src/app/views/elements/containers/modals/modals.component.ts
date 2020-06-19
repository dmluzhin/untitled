import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DefaultModalComponent} from './components/default-modal/default-modal.component';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DefaultModalComponent);
  }
  ngOnInit() {
  }

}

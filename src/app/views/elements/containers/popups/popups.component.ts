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

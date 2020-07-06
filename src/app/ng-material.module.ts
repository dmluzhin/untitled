import { NgModule} from "@angular/core";
import {
  MatFormFieldModule,
  MatInputModule,
  MatAutocompleteModule,
  MatSelectModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatRadioModule,
  MatProgressBarModule,
  MatTooltipModule,
  MatDialogModule,
  MatTabsModule,
  MatStepperModule,
  MatSnackBarModule,
  MatMenuModule,
  MatDatepickerModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatRadioModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatStepperModule,
    MatSnackBarModule,
    MatMenuModule,
    MatDatepickerModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatRadioModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatStepperModule,
    MatSnackBarModule,
    MatMenuModule,
    MatDatepickerModule
  ]
})

export class NgMaterialModule { }

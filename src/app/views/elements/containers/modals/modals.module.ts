import {BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DefaultModalComponent } from './components/default-modal/default-modal.component';

@NgModule({
  declarations: [
    DefaultModalComponent
  ],
  entryComponents: [
    DefaultModalComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    DefaultModalComponent
  ]
})

export class ModalsModule { }

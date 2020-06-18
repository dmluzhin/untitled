import {BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavHeaderComponent } from './components/nav-header/nav-header.component';
import { NavFooterComponent } from './components/nav-footer/nav-footer.component';

@NgModule({
  declarations: [
    NavHeaderComponent,
    NavFooterComponent,
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    NavHeaderComponent,
    NavFooterComponent,
  ]
})

export class NavModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SvgSpriteComponent } from './shared/components/svg-sprite/svg-sprite.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { FooterComponent } from './core/footer/footer.component';
import { TypographyComponent } from './views/typography/typography.component';
import { HomeComponent } from './views/home/home.component';
import { ElementsComponent } from './views/elements/elements.component';
import { ComponentsComponent } from './views/components/components.component';
import { PagesComponent } from './views/pages/pages.component';
import { ButtonsComponent } from './views/elements/containers/buttons/buttons.component';
import {
  HighlightModule,
  HIGHLIGHT_OPTIONS,
  HighlightOptions
} from "ngx-highlightjs";

@NgModule({
  declarations: [
    AppComponent,
    SvgSpriteComponent,
    NavigationComponent,
    FooterComponent,
    TypographyComponent,
    HomeComponent,
    ElementsComponent,
    ComponentsComponent,
    PagesComponent,
    ButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighlightModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: <HighlightOptions>{
        lineNumbers: true
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SvgSpriteComponent } from './shared/components/svg-sprite/svg-sprite.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMaterialModule} from './ng-material.module';
import { NavigationComponent } from './core/navigation/navigation.component';
import { FooterComponent } from './core/footer/footer.component';
import { TypographyComponent } from './views/typography/typography.component';
import { HomeComponent } from './views/home/home.component';
import { ElementsComponent } from './views/elements/elements.component';
import { ComponentsComponent } from './views/components/components.component';
import { PagesComponent } from './views/pages/pages.component';
import { ButtonsComponent } from './views/elements/containers/buttons/buttons.component';
import { HighlightService } from './highlight.service';
import { FormsComponent } from './views/elements/containers/forms/forms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SurveyComponent } from './views/components/containers/survey/survey.component';

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
    ButtonsComponent,
    FormsComponent,
    SurveyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgMaterialModule
  ],
  providers: [HighlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }

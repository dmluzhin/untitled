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
import { WorkFormsComponent } from './views/components/containers/work-forms/work-forms.component';
import { NavComponent} from './views/components/containers/nav/nav.component';
import { NavModule } from './views/components/containers/nav/nav.module';
import { ModalsComponent } from './views/elements/containers/modals/modals.component';
import { GravatarModule } from 'ngx-gravatar';

/*modals*/
import {DefaultModalComponent} from './views/elements/containers/modals/components/default-modal/default-modal.component';
import { NormalModalComponent } from './views/elements/containers/modals/components/normal-modal/normal-modal.component';
import { MediumModalComponent } from './views/elements/containers/modals/components/medium-modal/medium-modal.component';
import { BigModalComponent } from './views/elements/containers/modals/components/big-modal/big-modal.component';
import { FluidModalComponent } from './views/elements/containers/modals/components/fluid-modal/fluid-modal.component';
import { ChangePassModalComponent } from './views/pages/components/modals/change-pass-modal/change-pass-modal.component';
import {
  PopupsComponent,
  PrimarySnackComponent,
  OrangeSnackComponent,
  GreenSnackComponent,
  RedSnackComponent
} from './views/elements/containers/popups/popups.component';
import { SurveyPageComponent } from './views/pages/containers/survey-page/survey-page.component';
import { ArticleComponent } from './views/pages/containers/article/article.component';
import { NewsComponent } from './views/pages/containers/news/news.component';
import { ProfileComponent } from './views/pages/containers/profile/profile.component';
import { AboutComponent } from './views/pages/containers/about/about.component';
import { ResultsComponent } from './views/pages/containers/results/results.component';
import { ChartsModule} from 'ng2-charts';
import { SurveyResultComponent } from './views/pages/containers/survey-result/survey-result.component';
import { IconsComponent } from './views/elements/containers/icons/icons.component';
import { CardsComponent } from './views/elements/containers/cards/cards.component';

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
    SurveyComponent,
    WorkFormsComponent,
    NavComponent,
    ModalsComponent,
    DefaultModalComponent,
    NormalModalComponent,
    MediumModalComponent,
    BigModalComponent,
    FluidModalComponent,
    ChangePassModalComponent,
    PopupsComponent,
    PrimarySnackComponent,
    OrangeSnackComponent,
    GreenSnackComponent,
    RedSnackComponent,
    SurveyPageComponent,
    ArticleComponent,
    NewsComponent,
    ProfileComponent,
    AboutComponent,
    ResultsComponent,
    SurveyResultComponent,
    IconsComponent,
    CardsComponent,
  ],
  entryComponents: [
    DefaultModalComponent,
    NormalModalComponent,
    MediumModalComponent,
    BigModalComponent,
    FluidModalComponent,
    ChangePassModalComponent,
    PrimarySnackComponent,
    OrangeSnackComponent,
    GreenSnackComponent,
    RedSnackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgMaterialModule,
    NavModule,
    GravatarModule,
    ChartsModule
  ],
  providers: [HighlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }

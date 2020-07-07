import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*VIEWS*/
import { HomeComponent} from './views/home/home.component';
import { ElementsComponent } from './views/elements/elements.component';
import { ComponentsComponent } from './views/components/components.component';
import { TypographyComponent } from './views/typography/typography.component';
import { PagesComponent } from './views/pages/pages.component';

/*SUBVIEWS*/
import { ButtonsComponent } from './views/elements/containers/buttons/buttons.component';
import { FormsComponent } from './views/elements/containers/forms/forms.component';
import { PopupsComponent} from './views/elements/containers/popups/popups.component';
import { IconsComponent} from './views/elements/containers/icons/icons.component';
/*КОМПОНЕНТЫ*/
import { SurveyComponent} from './views/components/containers/survey/survey.component';
import { WorkFormsComponent} from './views/components/containers/work-forms/work-forms.component';
import { NavComponent } from './views/components/containers/nav/nav.component';
import { ModalsComponent} from './views/elements/containers/modals/modals.component';

/*СТРАНИЦЫ*/
import { SurveyPageComponent } from './views/pages/containers/survey-page/survey-page.component';
import { ArticleComponent } from './views/pages/containers/article/article.component';
import { NewsComponent } from './views/pages/containers/news/news.component';
import { ProfileComponent} from './views/pages/containers/profile/profile.component';
import { AboutComponent } from './views/pages/containers/about/about.component';
import { ResultsComponent} from './views/pages/containers/results/results.component';
import { SurveyResultComponent } from './views/pages/containers/survey-result/survey-result.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'elements',
    component: ElementsComponent
  },
  {
    path: 'components',
    component: ComponentsComponent
  },
  {
    path: 'typography',
    component: TypographyComponent
  },
  {
    path: 'pages',
    component: PagesComponent
  },
  {
    path: 'elements/buttons',
    component: ButtonsComponent
  }
  ,
  {
    path: 'elements/forms',
    component: FormsComponent
  },
  {
    path: 'elements/popups',
    component: PopupsComponent
  },
  {
    path: 'elements/modals',
    component: ModalsComponent
  },
  {
    path: 'elements/icons',
    component: IconsComponent
  },
  {
    path: 'components/survey',
    component: SurveyComponent
  },
  {
    path: 'components/forms',
    component: WorkFormsComponent
  },
  {
    path: 'components/nav',
    component: NavComponent
  },
  {
    path: 'pages/survey-page',
    component: SurveyPageComponent
  },
  {
    path: 'pages/news',
    component: NewsComponent
  },
  {
    path: 'pages/article',
    component: ArticleComponent
  },
  {
    path: 'pages/profile',
    component: ProfileComponent
  },
  {
    path: 'pages/results',
    component: ResultsComponent
  },
  {
    path: 'pages/about',
    component: AboutComponent
  },
  {
    path: 'pages/survey-result',
    component: SurveyResultComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

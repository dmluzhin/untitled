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

/*КОМПОНЕНТЫ*/
import { SurveyComponent} from './views/components/containers/survey/survey.component';
import { WorkFormsComponent} from './views/components/containers/work-forms/work-forms.component';

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
    path: 'components/survey',
    component: SurveyComponent
  },
  {
    path: 'components/forms',
    component: WorkFormsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

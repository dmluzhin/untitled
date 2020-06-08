import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*VIEWS*/
import { HomeComponent} from './views/home/home.component';
import { ElementsComponent } from './views/elements/elements.component';
import { ComponentsComponent } from './views/components/components.component';
import { TypographyComponent } from './views/typography/typography.component';
import { PagesComponent } from './views/pages/pages.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
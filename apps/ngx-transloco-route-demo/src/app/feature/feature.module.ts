import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildrenComponent } from './children/children.component';
import {TRANSLOCO_SCOPE, TranslocoModule} from "@ngneat/transloco";
import {RouterModule, Routes} from "@angular/router";
import {loader} from "../../scoped-translations";


const routes: Routes = [
  {
    path: '',
    component: ChildrenComponent
  },
];

@NgModule({
  declarations: [ChildrenComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslocoModule,
    //LocalizeRouterModule.forChild(routes)
  ],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: 'features',
        loader: loader((lang) => import(`./i18n/${lang}.json`))
      }
    }
  ]
})
export class FeatureModule { }

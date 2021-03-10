import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpComponent } from './help/help.component';
import {RouterModule, Routes} from "@angular/router";
import {TRANSLOCO_SCOPE, TranslocoModule} from "@ngneat/transloco";
import {LocalizeRouterModule} from "../../../../../libs/ngx-transloco-router/src";

const routes: Routes = [
  {
    path: '',
    component: HelpComponent
  },
];

@NgModule({
  declarations: [HelpComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslocoModule,
    LocalizeRouterModule.forChild(routes)
  ],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: 'help'
      }
    }
  ]
})
export class CoreModule { }

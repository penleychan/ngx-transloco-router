import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BobComponent } from './bob/bob.component';
import { Test2Component } from './test2/test2.component';
import { LocalizeRouterModule } from '@penleychan/ngx-transloco-router';

const routes: Routes = [
  {
    path: '',
    component: Test2Component,
    children: [
      {
        path: 'sarah',
        component: BobComponent,
        data: { skipRouteLocalization: true },
      },
      {
        path: 'both',
        component: BobComponent,
        data: { skipRouteLocalization: true },
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    LocalizeRouterModule.forChild(routes),
  ],
  exports: [RouterModule, LocalizeRouterModule],
})
export class TestRoutingModule {}

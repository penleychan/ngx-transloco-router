import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Test3Component } from './test3/test3.component';
import { BobComponent } from './bob/bob.component';
import { LocalizeRouterModule } from '@penleychan/ngx-transloco-router';

const routes: Routes = [
  {
    path: '',
    component: Test3Component,
    children: [{ path: 'coco', component: BobComponent }],
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

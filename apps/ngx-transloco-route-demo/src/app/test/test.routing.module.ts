import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BobComponent } from './bob/bob.component';
import { LocalizeRouterModule } from '@penleychan/ngx-transloco-router';

const routes: Routes = [
  { path: '', component: BobComponent },
  { path: 'bob', component: BobComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    LocalizeRouterModule.forChild(routes),
  ],
  exports: [RouterModule, LocalizeRouterModule],
})
export class TestRoutingModule {}

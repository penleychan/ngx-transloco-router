import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LocalizeRouterModule } from '@penleychan/ngx-transloco-router';
import { StepOne } from './step-one/step-one';

const routes: Routes = [
  {
    path: 'step-one',
    component: StepOne,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    LocalizeRouterModule.forChild(routes),
  ],
  exports: [RouterModule, LocalizeRouterModule],
})
export class RegistrationRoutingModule {}

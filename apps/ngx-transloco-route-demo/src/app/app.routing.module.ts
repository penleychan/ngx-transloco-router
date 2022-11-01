import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GreetingsComponent } from './greetings/greetings.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {
  LOCALIZE_ROUTER_CONFIG,
  localizeRouterConfig,
} from '../../../../libs/ngx-transloco-router/src/lib/localize-router.config';
import { LocalizeRouterModule } from '@penleychan/ngx-transloco-router';
import {AppComponent} from "./app.component";

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'greetings',
    component: GreetingsComponent,
    title: 'TEST',
    data: {
      skipRouteLocalization: false,
    },
  },
  {
    path: '!child',
    loadChildren: () =>
      import('./feature/feature.module').then((mod) => mod.FeatureModule),
  },
  {
    path: '!help/testa',
    loadChildren: () =>
      import('./core/core.module').then((mod) => mod.CoreModule),
  },
  // { path: '404', component: NotFoundComponent },
  // { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LocalizeRouterModule.forRoot(routes)],
  exports: [RouterModule, LocalizeRouterModule],
  providers: [
    {
      provide: LOCALIZE_ROUTER_CONFIG,
      useValue: localizeRouterConfig({
        translateRoute: false,
      }),
    },
  ],
})
export class AppRoutingModule {}

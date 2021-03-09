import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LocalizeRouterModule} from "../../../../libs/ngx-transloco-router/src/lib/localize-router.module";
import {GreetingsComponent} from "./greetings/greetings.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  {
    path: 'greetings',
    component: GreetingsComponent,
    data: {
      skipRouteLocalization: false
    }
  },
  {
    path: 'child',
    loadChildren: () => import('./feature/feature.module').then(mod => mod.FeatureModule)
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LocalizeRouterModule.forRoot(routes, {
      translateRoute: true
    })
  ],
  exports: [RouterModule, LocalizeRouterModule]
})
export class AppRoutingModule {
}

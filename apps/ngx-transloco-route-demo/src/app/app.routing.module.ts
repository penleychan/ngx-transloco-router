import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LocalizeRouterModule} from "../../../../libs/ngx-transloco-router/src/lib/localize-router.module";
import {GreetingsComponent} from "./greetings/greetings.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'greetings'
  },
  {
    path: 'greetings',
    component: GreetingsComponent
  },
  {
    path: 'child',
    loadChildren: () => import('./feature/feature.module').then(mod => mod.FeatureModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LocalizeRouterModule.forRoot(routes, {
      initialNavigation: true
    })
  ],
  exports: [RouterModule, LocalizeRouterModule]
})
export class AppRoutingModule {
}

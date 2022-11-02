import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import {
  LOCALIZE_ROUTER_CONFIG,
  localizeRouterConfig,
} from '@penleychan/ngx-transloco-router';
import { LocalizeRouterModule } from '@penleychan/ngx-transloco-router';

import { HomeComponent } from './home/home.component';
import { baseMatcher } from './matcher/matcher.module';
import { detailMatcher } from './matcher/matcher-detail/matcher-detail.module';

const routes: Routes = [
  {
    path: '',
    title: 'HOME_TITLE',
    component: HomeComponent,
    loadChildren: () =>
      import('./test/test.module').then((mod) => mod.TestModule),
    data: { discriminantPathKey: 'TESTPATH' },
  },
  {
    path: '',
    loadChildren: () =>
      import('./test2/test.module').then((mod) => mod.TestModule),
    data: { discriminantPathKey: 'TEST2PATH' },
  },
  {
    path: '',
    loadChildren: () =>
      import('./test3/test.module').then((mod) => mod.TestModule),
    data: { discriminantPathKey: 'TEST3PATH' },
  },
  {
    path: 'root-redirection',
    redirectTo: '/',
  },
  {
    path: 'matcher',
    children: [
      {
        matcher: detailMatcher,
        loadChildren: () =>
          import('./matcher/matcher-detail/matcher-detail.module').then(
            (mod) => mod.MatcherDetailModule
          ),
      },
      {
        matcher: baseMatcher,
        loadChildren: () =>
          import('./matcher/matcher.module').then((mod) => mod.MatcherModule),
        data: {
          localizeMatcher: {
            params: {
              mapPage: shouldTranslateMap,
            },
          },
        },
      },
    ],
  },
  { path: 'home', component: HomeComponent },
  {
    path: 'test',
    component: HomeComponent,
    loadChildren: () =>
      import('./test/test.module').then((mod) => mod.TestModule),
  },
  {
    path: '!test',
    component: HomeComponent,
    loadChildren: () =>
      import('./test/test.module').then((mod) => mod.TestModule),
  },
  {
    path: 'toredirect',
    redirectTo: '/home',
    data: { skipRouteLocalization: { localizeRedirectTo: true } },
  },
  { path: 'bob', children: [{ path: 'home/:test', component: HomeComponent }] },
  { path: '404', component: NotFoundComponent, title: 'page_not_found' },
  { path: '**', redirectTo: '/404' },
];

export function shouldTranslateMap(param: string): string {
  if (isNaN(+param)) {
    return 'map';
  }
  return null;
}

@NgModule({
  imports: [RouterModule.forRoot(routes), LocalizeRouterModule.forRoot(routes)],
  exports: [RouterModule, LocalizeRouterModule],
  providers: [
    {
      provide: LOCALIZE_ROUTER_CONFIG,
      useValue: localizeRouterConfig({
        translateRoute: true,
      }),
    },
  ],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatcherComponent } from './matcher.component';
import {
  RouterModule,
  Routes,
  UrlMatchResult,
  UrlSegment,
} from '@angular/router';
import {
  LocalizedMatcherUrlSegment,
  LocalizeRouterModule,
} from '@penleychan/ngx-transloco-router';
import { TranslocoModule } from '@ngneat/transloco';

export function baseMatcher(baseSegments: UrlSegment[]): UrlMatchResult {
  const segments = [...baseSegments];
  // /
  // /:mapPage
  // /:a
  // /:a/:mapPage
  // /:a/:b
  // /:a/:b/:mapPage
  // /:a/:b/:c
  // /:a/:b/:c/:mapPage

  const result: UrlMatchResult = {
    consumed: [],
    posParams: {},
  };

  if (segments.length > 0) {
    const last = segments.length - 1;
    const isMap = isMapOrPage(segments[last]);
    for (const segment of 'abc'.substr(0, isMap ? last : segments.length)) {
      takeFirstSegment(segment);
    }
    if (isMap) {
      takeFirstSegment('mapPage');
    }
  }
  return result;

  function takeFirstSegment(name: string): void {
    const segment = segments.shift();
    (segment as LocalizedMatcherUrlSegment).localizedParamName = name;
    result.consumed.push(segment);
    result.posParams[name] = segment;
  }

  function isMapOrPage(url: UrlSegment): boolean {
    // This regex should include all variations for the segment
    return url.path.match(/^(map|carte|\d+)$/i) !== null;
  }
}

const routes: Routes = [
  {
    path: '',
    component: MatcherComponent,
    data: { discriminantPathKey: 'BASE' },
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LocalizeRouterModule.forChild(routes),
    TranslocoModule,
  ],
  declarations: [MatcherComponent],
  exports: [RouterModule, LocalizeRouterModule],
})
export class MatcherModule {}

import {
  APP_INITIALIZER,
  ApplicationRef, Compiler,
  Injectable,
  Injector,
  ModuleWithProviders,
  NgModule,
  NgModuleFactoryLoader,
  SkipSelf,
  Optional, Provider,
} from '@angular/core';
import {CommonModule, Location} from '@angular/common';
import {DefaultLocalizeParser, LocalizeParser} from "./localize-router.parser";
import {
  ChildrenOutletContexts,
  Router,
  ROUTER_CONFIGURATION,
  RouteReuseStrategy, RouterModule,
  ROUTES,
  Routes, UrlHandlingStrategy,
  UrlSerializer
} from "@angular/router";
import {LocalizeRouterService} from "./localize-router.service";
import {
  LOCALIZE_ROUTER_CONFIG,
  LOCALIZE_ROUTER_FORROOT_GUARD,
  LocalizeRouterConfig,
  RAW_ROUTES,
} from "./localize-router.config";
import {deepCopy} from "./util";
import {GilsdavReuseStrategy} from "./gilsdav-reuse-strategy";
import {setupRouter} from "./localized-router";
import {TranslocoModule, TranslocoService} from "@ngneat/transloco";
import {LocalizeRouterPipe} from "./localize-router.pipe";

@Injectable({
  providedIn: "root"
})
export class ParserInitializer {
  parser: LocalizeParser;
  routes: Routes;

  constructor(private injector: Injector) {
  }

  appInitializer(): Promise<any> {
    const res = this.parser.load(this.routes);

    return res.then(() => {
      const localize = this.injector.get(LocalizeRouterService);
      const router = this.injector.get(Router);
      const settings: LocalizeRouterConfig = this.injector.get(LOCALIZE_ROUTER_CONFIG);

      localize.init();

      if (settings.initialNavigation) {
        return new Promise<void>(resolve => {
          // @ts-ignore
          const oldAfterPreactivation = router.hooks.afterPreactivation;
          let firstInit = true;
          // @ts-ignore
          router.hooks.afterPreactivation = () => {
            if (firstInit) {
              resolve();
              firstInit = false;
              localize.hooks._initializedSubject.next(true);
              localize.hooks._initializedSubject.complete();
            }
            return oldAfterPreactivation();
          };
        });
      } else {
        localize.hooks._initializedSubject.next(true);
        localize.hooks._initializedSubject.complete();
      }
    });
  }

  generateInitializer(parser: LocalizeParser, routes: Routes[]): () => Promise<any> {
    this.parser = parser;
    this.routes = routes.reduce((a, b) => a.concat(b));
    return this.appInitializer;
  }
}

export function getAppInitializer(p: ParserInitializer, parser: LocalizeParser, routes: Routes[]): any {
  // DeepCopy needed to prevent RAW_ROUTES mutation
  const routesCopy = deepCopy(routes);
  return p.generateInitializer(parser, routesCopy).bind(p);
}

export const defaultProviders: Provider[] = [
  {
    provide: LocalizeParser,
    useClass: DefaultLocalizeParser,
    deps: [TranslocoService, Location, LOCALIZE_ROUTER_CONFIG]
  }
]

@NgModule({
  imports: [CommonModule, RouterModule, TranslocoModule],
  declarations: [LocalizeRouterPipe],
  exports: [LocalizeRouterPipe],
  providers: [
    defaultProviders
  ]
})
export class LocalizeRouterModule {
  static forRoot(routes: Routes): ModuleWithProviders<LocalizeRouterModule> {
    return {
      ngModule: LocalizeRouterModule,
      providers: [
        {
          provide: RAW_ROUTES,
          multi: true,
          useValue: routes
        },
        {
          provide: LOCALIZE_ROUTER_FORROOT_GUARD,
          useFactory: provideForRootGuard,
          deps: [[LocalizeRouterModule, new Optional(), new SkipSelf()]]
        },
        {
          provide: Router,
          useFactory: setupRouter,
          deps: [
            ApplicationRef,
            UrlSerializer,
            ChildrenOutletContexts,
            Location,
            Injector,
            NgModuleFactoryLoader,
            Compiler,
            ROUTES,
            LocalizeParser,
            ROUTER_CONFIGURATION,
            [UrlHandlingStrategy, new Optional()],
            [RouteReuseStrategy, new Optional()]
          ]
        },
        {
          provide: APP_INITIALIZER,
          multi: true,
          useFactory: getAppInitializer,
          deps: [ParserInitializer, LocalizeParser, RAW_ROUTES]
        },
        {
          provide: RouteReuseStrategy,
          useClass: GilsdavReuseStrategy
        }
      ]
    };
  }

  static forChild(routes: Routes): ModuleWithProviders<LocalizeRouterModule> {
    return {
      ngModule: LocalizeRouterModule,
      providers: [
        {
          provide: RAW_ROUTES,
          multi: true,
          useValue: routes
        }
      ]
    };
  }
}

export function provideForRootGuard(localizeRouterModule: LocalizeRouterModule): string {
  if (localizeRouterModule) {
    throw new Error(
      `LocalizeRouterModule.forRoot() called twice. Lazy loaded modules should use LocalizeRouterModule.forChild() instead.`);
  }
  return 'guarded';
}

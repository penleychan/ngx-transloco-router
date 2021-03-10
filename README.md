# @penleychan/ngx-transloco-router

This is a fork/port of [@gilsdav/ngx-translate-router](https://github.com/gilsdav/ngx-translate-router)
modified to work with [@ngneat/transloco](https://github.com/ngneat/transloco).

## Install
```
npm i @penleychan/ngx-transloco-router
```

## Setup
Bare minimum setup
```
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LocalizeRouterModule.forRoot(routes)
  ],
  exports: [RouterModule, LocalizeRouterModule],
  providers: [
    {
      provide: LOCALIZE_ROUTER_CONFIG,
      useValue: localizeRouterConfig()
    }
  ]
})
export class AppRoutingModule {
}
```

## Translate Route
Enable translate route:
```
providers: [
  {
    provide: LOCALIZE_ROUTER_CONFIG,
    useValue: localizeRouterConfig({
      ...
      translateRoute: true
    })
  }
]
```

Translate route only works at the root level of your translation files, does not support scoping.

By default the prefix for translating routes is `ROUTES`. In order for translating route to work you need to have `ROUTES`
on your translation files.

```
// en.json
{
  ...
  "ROUTES": {
    "home": "home",
    "reports": "reports"
  }
}

// fr.json
{
  ...
  "ROUTES": {
    "home": "accueil",
    "reports": "rapports"
  }
}
```
You can override the prefix by configuration
```
providers: [
  {
    provide: LOCALIZE_ROUTER_CONFIG,
    useValue: localizeRouterConfig({
      ...
      prefix: 'ROUTE_TRANSLATION.'
    })
  }
]
```

## LOCALIZE_ROUTER_CONFIG
These are the configuration settings available and it's defaults
```
export const defaultConfig: LocalizeRouterConfig = {
  translateRoute: false,
  useCachedLang: true,
  alwaysSetPrefix: true,
  cacheMechanism: CacheMechanism.LocalStorage,
  cacheName: LOCALIZE_CACHE_NAME,
  defaultLangFunction: void 0,
  cookieFormat: DEFAULT_COOKIE_FORMAT,
  initialNavigation: DEFAULT_INITIAL_NAVIGATION,
  prefix: 'ROUTES.',
  escapePrefix: '!'
};
```

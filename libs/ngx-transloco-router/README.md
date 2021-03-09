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
  exports: [RouterModule, LocalizeRouterModule]
})
export class AppRoutingModule {
}
```

## Translate Route
Enable translate route on `LocalizeRouterModule`:
```
LocalizeRouterModule.forRoot(routes, {
  ...
  translateRoute: true
})
```

Currently translate route only works at the root level of your translation files, does not support scope

In order to get route translated you need to have `ROUTES` on your translation file. For example

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

import { Component } from '@angular/core';
import {LocalizeRouterService} from "../../../../libs/ngx-transloco-router/src/lib/localize-router.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngx-transloco-route-demo';

  constructor(private localizeRouterService: LocalizeRouterService) {
  }

  switchLang(lang: string) {
      this.localizeRouterService.changeLanguage(lang);
  }
}

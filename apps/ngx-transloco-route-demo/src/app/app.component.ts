import { Component, OnInit } from '@angular/core';
import { LocalizeRouterService } from '@penleychan/ngx-transloco-router';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  currentLang: string;

  constructor(
    private localizeRouterService: LocalizeRouterService,
    private translocoService: TranslocoService
  ) {}

  ngOnInit(): void {
    this.translocoService.langChanges$.subscribe((lang: string) => {
      this.currentLang = lang === 'en' ? 'Français' : 'English';
    });
  }

  public routerOutletActivation(active: boolean) {
    console.log('routerOutletActivation', active);
  }

  switchLang() {
    let lang = 'en';
    if (this.translocoService.getActiveLang() === 'en') {
      lang = 'fr';
    }
    this.localizeRouterService.changeLanguage(lang);
  }
}

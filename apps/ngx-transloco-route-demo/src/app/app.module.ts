import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { TitleStrategy } from '@angular/router';
import { TranslateTitleStrategy } from './translate-title-strategy';

@NgModule({
  declarations: [AppComponent, NotFoundComponent, HomeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslocoRootModule,
    AppRoutingModule,
  ],
  providers: [{ provide: TitleStrategy, useClass: TranslateTitleStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

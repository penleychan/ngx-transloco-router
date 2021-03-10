import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app.routing.module";
import {HttpClientModule} from "@angular/common/http";
import { GreetingsComponent } from './greetings/greetings.component';
import {TranslocoRootModule} from "./transloco-root.module";
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [AppComponent, GreetingsComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslocoRootModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

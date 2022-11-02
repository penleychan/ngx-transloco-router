import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BobComponent } from './bob/bob.component';
import { Test2Component } from './test2/test2.component';
import { TestRoutingModule } from './test.routing.module';
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
  declarations: [BobComponent, Test2Component],
  imports: [CommonModule, TestRoutingModule, TranslocoModule],
})
export class TestModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BobComponent } from './bob/bob.component';
import { Test3Component } from './test3/test3.component';
import { TestRoutingModule } from './test.routing.module';
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
  declarations: [BobComponent, Test3Component],
  imports: [CommonModule, TestRoutingModule, TranslocoModule],
})
export class TestModule {}

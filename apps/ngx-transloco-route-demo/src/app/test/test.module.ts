import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BobComponent } from './bob/bob.component';
import { TestRoutingModule } from './test.routing.module';
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
  declarations: [BobComponent],
  imports: [CommonModule, TestRoutingModule, TranslocoModule],
})
export class TestModule {}

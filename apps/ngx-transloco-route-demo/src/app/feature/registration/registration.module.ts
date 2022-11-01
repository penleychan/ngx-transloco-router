import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslocoModule} from "@ngneat/transloco";
import {RegistrationRoutingModule} from "./registration.routing.module";
import {StepOne} from "./step-one/step-one";



@NgModule({
  declarations: [
    StepOne
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    TranslocoModule,
  ]
})
export class RegistrationModule { }

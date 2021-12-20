import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { BbOmniPaymentWidgetComponent } from './bb-omni-payment.component';
import { PayordOmniPaymentWidgetAngModule } from '@backbase/payord-omni-payment-widget-ang';

 

@NgModule({
  declarations: [BbOmniPaymentWidgetComponent],
  imports: [
    CommonModule,
    BackbaseCoreModule.withConfig({
      classMap: { BbOmniPaymentWidgetComponent }
    }),
    PayordOmniPaymentWidgetAngModule
  ]
})
export class BbOmniPaymentWidgetModule { }
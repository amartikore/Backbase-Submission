import { Component } from '@angular/core';
import { PayordOmniPaymentWidgetAngComponent } from '@backbase/payord-omni-payment-widget-ang';
import { CopyRoutes } from '@backbase/foundation-ang/core';
import { SEPA } from './bb-config-omni-payment';

@Component({
  selector: 'bb-omni-payment-widget',
  templateUrl: './bb-omni-payment.component.html',
  styles: [
  ]
})

@CopyRoutes(PayordOmniPaymentWidgetAngComponent)
export class BbOmniPaymentWidgetComponent {
  paymentConfig = SEPA;
  businessFunction = 'US Domestic Wire';
}
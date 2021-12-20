import { createMocksInterceptor } from '@backbase/foundation-ang/data-http';

import { Item } from '@backbase/foundation-ang/web-sdk';
import { ExternalServices } from '@backbase/foundation-ang/start';

import { Environment } from './type';
import { ProductSummaryHttpServiceMocksProvider } from '@backbase/data-ang/arrangements';
import { PaymentOrdersHttpServiceMocksProvider} from '@backbase/data-ang/payment-order';

const services: ExternalServices = {};

const pageModel: Item = {
  name: 'app-container',
  properties: {},
  children: [
    {
      name: "tab-container",
      properties: {
        classId: "TabContainerComponent"
      },
      children: [
        {
          name: "atm-locator-tab",
          properties: {
            classId: "PanelContainerComponent"
          },
          children: [
            /*
              Add AtmsLocatorWidgetComponent
            */
            {
              name: "Omni Payment",
              properties: {
                classId: "BbOmniPaymentWidgetComponent",
              }
            }
          ]
        },
        {
          name: "atm-detail-tab",
          properties: {
            classId: "PanelContainerComponent"
          },
          children: [
            /*
              Add AtmDetailWidgetComponent
            */
            {
              name: "atm-detail",
              properties: {
                classId: "ProductSummaryListWidgetComponent",
              }
            }
          ]
        }
      ]
    }
  ],
};

export const environment: Environment = {
  production: false,
  animation: true,
  mockProviders: [createMocksInterceptor(), 
    ProductSummaryHttpServiceMocksProvider,
    PaymentOrdersHttpServiceMocksProvider],
  bootstrap: {
    pageModel,
    services,
  },
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

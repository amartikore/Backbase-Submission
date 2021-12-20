import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { environment } from '../environments/environment';
import {ContainersModule} from "@backbase/universal-ang/containers";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ProductSummaryListWidgetModule,PaymentRequestWidgetModule } from '@backbase/retail-ang';
import { WebSdkApiModule } from '@backbase/foundation-ang/web-sdk';
import { BbOmniPaymentWidgetModule } from '@bb-omni-payment-widget/bb-omni-payment-widget';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    HttpClientModule,
    BackbaseCoreModule,
    ContainersModule,
    RouterModule.forRoot([], { initialNavigation: "disabled", useHash: true }),
    environment.animation ? BrowserAnimationsModule : NoopAnimationsModule,
    WebSdkApiModule,
    ProductSummaryListWidgetModule,
    PaymentRequestWidgetModule,
    BbOmniPaymentWidgetModule
  ],
  providers: [...environment.mockProviders || []],
  bootstrap: [AppComponent]
})
export class AppModule { }

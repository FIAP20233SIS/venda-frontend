import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductsComponent } from './components/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product/product.service';
import { PaymentComponent } from './components/payment/payment.component';
import { FormsModule } from '@angular/forms';
import { ModalProductComponent } from './components/modal-product/modal-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CompletedPurchaseComponent } from './components/completed-purchase/completed-purchase.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ProductsComponent,
    PaymentComponent,
    ModalProductComponent,
    CompletedPurchaseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      iconClasses: {
        error: 'custom-toast-error',
        info: 'ngx-toastr-info',
        success: 'custom-toast-success',
        warning: 'ngx-toastr-warning'
      }
    }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

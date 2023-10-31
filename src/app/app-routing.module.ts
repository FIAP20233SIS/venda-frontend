import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedPurchaseComponent } from './components/completed-purchase/completed-purchase.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'cadastro-cliente', component: RegisterComponent },
  { path: 'pagamento', component: PaymentComponent },
  { path: 'conclusao', component: CompletedPurchaseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

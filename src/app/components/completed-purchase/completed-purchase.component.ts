import { Component } from '@angular/core';
import { PaymentService } from 'src/app/services/payment/payment.service';
import { PurchaseService } from 'src/app/services/purchase/purchase.service';

@Component({
  selector: 'app-completed-purchase',
  templateUrl: './completed-purchase.component.html',
  styleUrls: ['./completed-purchase.component.scss']
})
export class CompletedPurchaseComponent {
  produtoSelecionado: any
  cliente: any;
  dadosPagamento: any;

  constructor(
    private purchaseService: PurchaseService,
    private paymentService: PaymentService
  ) { }

  ngOnInit(): void {
    this.produtoSelecionado = this.purchaseService.produtoSelecionado;
    this.cliente = this.purchaseService.cliente;
    
    const selectedProductString = localStorage.getItem('selectedProduct');
    this.produtoSelecionado = selectedProductString ? JSON.parse(selectedProductString) : null;

    const clienteString = localStorage.getItem('cliente');
    this.cliente = clienteString ? JSON.parse(clienteString) : null;
  }
}

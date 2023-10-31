import { Component } from '@angular/core';
import { ProductInterface } from 'src/app/interfaces/product.interface';
import { PurchaseService } from 'src/app/services/purchase/purchase.service';

@Component({
  selector: 'app-completed-purchase',
  templateUrl: './completed-purchase.component.html',
  styleUrls: ['./completed-purchase.component.scss']
})
export class CompletedPurchaseComponent {
  produtoSelecionado: ProductInterface | undefined;
  clienteEmail: string | undefined;

  constructor(private purchaseService: PurchaseService) { }

  ngOnInit() {
    this.produtoSelecionado = this.purchaseService.produtoSelecionado;
    this.clienteEmail = this.purchaseService.clienteEmail;
  }
}

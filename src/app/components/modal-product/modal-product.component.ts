import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductInterface } from 'src/app/interfaces/product.interface';
import { PurchaseService } from 'src/app/services/purchase/purchase.service';

@Component({
  selector: 'app-modal-product',
  templateUrl: './modal-product.component.html',
  styleUrls: ['./modal-product.component.scss']
})
export class ModalProductComponent {
  @Input() product: any;
  @Output() closeModalEmit = new EventEmitter()

  constructor(
    private router: Router, 
    private purchaseService: PurchaseService,
  ) { }

  comprarProduto() {
    this.purchaseService.produtoSelecionado = this.product;
    this.router.navigate(['/cadastro-cliente']);

    localStorage.setItem('produtoSelecionado', JSON.stringify(this.product));
  }
}

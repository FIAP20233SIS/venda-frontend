import { Component } from '@angular/core';
import { ProductInterface } from 'src/app/interfaces/product.interface';
import { ProductService } from 'src/app/services/product/product.service';
import { PurchaseService } from 'src/app/services/purchase/purchase.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent {
  selectedProduct: any;
  modalProduct!: boolean;
  produtos: ProductInterface[] = [];

  constructor(
    private productService: ProductService, 
    private purchaseService: PurchaseService
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((response: any) => {
      this.produtos = response.content;
    });
  }

  showProductModal(product: any) {
    console.log('Produto selecionado:', product);
    this.selectedProduct = product;
    this.purchaseService.setProdutoSelecionado(product);
    this.modalProduct = true;
    localStorage.setItem('selectedProduct', JSON.stringify(product));
  }
}

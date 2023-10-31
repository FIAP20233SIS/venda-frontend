import { Component } from '@angular/core';
import { ProductInterface } from 'src/app/interfaces/product.interface';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})

export class ProductsComponent {
  selectedProduct: any;
  modalProduct!: boolean;
  produtos: ProductInterface[] = [];
  groupedProducts: any[] = [];

  constructor(private productService: ProductService) { }

    ngOnInit(): void {
        this.productService.getProducts().subscribe((response: any) => {
          this.produtos = response.content.slice(0, 6);
        });
    }

    showProductModal(product: any) {
      this.selectedProduct = product;
      this.modalProduct = true;
    }
}

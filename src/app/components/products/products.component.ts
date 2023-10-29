import { Component } from '@angular/core';
import { ProductService} from 'src/app/services/product/product.service';


@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
    products: any[] = [];

    constructor(private productService: ProductService) { }

    ngOnInit(): void {
        this.productService.getProducts().subscribe(products => {
            this.products = products.slice(0, 6);
        });
    }
}

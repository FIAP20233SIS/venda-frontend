import { Injectable } from '@angular/core';
import { ProductInterface } from 'src/app/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  produtoSelecionado: ProductInterface | undefined;
  clienteEmail: string | undefined
  constructor() { }
}

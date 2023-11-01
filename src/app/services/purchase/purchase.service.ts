import { Injectable } from '@angular/core';
import { ProductInterface } from 'src/app/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  produtoSelecionado: ProductInterface | undefined;
  cliente: any
  
  constructor() { }

  setProdutoSelecionado(produto: any) {
    this.produtoSelecionado = produto;
  }

  setCliente(cliente: any) {
    this.cliente = cliente;
  }
}

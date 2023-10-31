import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductInterface } from 'src/app/interfaces/product.interface';
import { PaymentService } from 'src/app/services/payment/payment.service';
import { PurchaseService } from 'src/app/services/purchase/purchase.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  produtoSelecionado: ProductInterface | undefined;
  dadosDoFormulario: any = {};

  constructor(
    private pagamentoService: PaymentService, 
    private toastr: ToastrService,
    private purchaseService: PurchaseService
  ) { }

  ngOnInit() {
    console.log(this.produtoSelecionado)
    this.produtoSelecionado = this.purchaseService.produtoSelecionado;

    const produtoLocalStorage = localStorage.getItem('produtoSelecionado');
    if (produtoLocalStorage) {
      this.produtoSelecionado = JSON.parse(produtoLocalStorage);
    } else {
      this.produtoSelecionado = this.purchaseService.produtoSelecionado;
    }
  }

  fazerPagamento(): void {
    this.pagamentoService.fazerPagamento(this.dadosDoFormulario).subscribe(
      resposta => {
        console.log('Pagamento concluído!', resposta);
        this.toastr.success('Pagamento realizado com sucesso');
      },
      erro => {
        console.error('Erro ao processar pagamento', erro);
        this.toastr.error('Erro ao processar pagamento');
      }
    );
  }
}

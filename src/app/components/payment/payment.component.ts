import { Component } from '@angular/core';
import { PaymentService } from 'src/app/services/payment/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  dadosDoFormulario: any = {};

  constructor(private pagamentoService: PaymentService) { }

  fazerPagamento(): void {
    this.pagamentoService.fazerPagamento(this.dadosDoFormulario).subscribe(
      resposta => {
        console.log('Pagamento concluído!', resposta);
      },
      erro => {
        console.error('Erro ao processar pagamento', erro);
      }
    );
  }
}

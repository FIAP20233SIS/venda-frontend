import { Component } from '@angular/core';
import { PaymentService } from 'src/app/services/payment/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  constructor(private pagamentoService: PaymentService) { }

  fazerPagamento(dados: PaymentService): void {
    this.pagamentoService.fazerPagamento(dados).subscribe(
      resposta => {
        console.log('Pagamento concluído!', resposta);
      },
      erro => {
        console.error('Erro ao processar pagamento', erro);
      }
    );
  }
}

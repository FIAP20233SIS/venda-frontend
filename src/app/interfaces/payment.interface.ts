export class PaymentInterface {
    numeroCartao: string;
    nomeTitular: string;
    dataValidade: string;
    valor: number;

    constructor(numeroCartao: string, nomeTitular: string, dataValidade: string, valor: number) {
        this.numeroCartao = numeroCartao;
        this.nomeTitular = nomeTitular;
        this.dataValidade = dataValidade;
        this.valor = valor;
    }
}
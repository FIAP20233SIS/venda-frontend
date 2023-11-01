import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private apiUrl = 'https://clienteapifiap.azurewebsites.net';

  constructor(private http: HttpClient) { }

  fazerPagamento(dados: PaymentService): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/pagamentos`, dados);
  }

  getDadosPagamento(): Observable<any> {
    return this.http.get(`${this.apiUrl}/pagamentos`,);
  }
}

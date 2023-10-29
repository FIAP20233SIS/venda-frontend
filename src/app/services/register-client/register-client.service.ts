import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientInterface } from 'src/app/interfaces/client.interface';

@Injectable({
  providedIn: 'root'
})
export class RegisterClientService {

  private apiUrl = '/cliente';

  constructor(private http: HttpClient) { }

  cadastrarCliente(cliente: ClientInterface): Observable<any> {
    return this.http.post<any>(this.apiUrl, cliente);
  }

}

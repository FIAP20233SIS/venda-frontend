import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ClientInterface } from 'src/app/interfaces/client.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  client: ClientInterface = {
    nome: '',
    email: '',
    cpf: '',
    telefone: ''
  }

  constructor(private http: HttpClient) { }

  cadastrarCliente() {
    const clienteJSON = JSON.stringify(this.client);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    this.http.post('https://clienteapifiap.azurewebsites.net/clientes', clienteJSON, httpOptions).subscribe(
      (response) => {
        console.log('Cliente cadastrado com sucesso:', response);
      },
      (error) => {
        console.error('Erro ao cadastrar cliente:', error);
      }
    );
  }

  onSubmit() {
    this.cadastrarCliente();
  }
}

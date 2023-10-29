import { Component } from '@angular/core';
import { RegisterClientService } from 'src/app/services/register-client/register-client.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private registerClientService: RegisterClientService) { }

  cadastrarCliente(id: number, nome: string, email: string, cpf: string, telefone: string): void {
    const novoCliente = {
      id: id,
      nome: nome,
      email: email,
      cpf: cpf,
      telefone: telefone
    };
  
    this.registerClientService.cadastrarCliente(novoCliente)
      .subscribe(
        response => {
          console.log('Cliente cadastrado com sucesso!', response);
        },
        error => {
          console.error('Erro ao cadastrar cliente', error);
        }
      );
  }
}

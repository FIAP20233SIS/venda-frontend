export class ClientInterface {
    id: number;
    nome: string;
    email: string;
    cpf: string;
    telefone: string;
  
    constructor(id: number, nome: string, email: string, cpf: string, telefone: string) {
      this.id = id;
      this.nome = nome;
      this.email = email;
      this.cpf = cpf;
      this.telefone = telefone;
    }
  }
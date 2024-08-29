import { PessoaUsuaria } from './../types/pessoa-usuaria';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  private apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  cadastrar(newUser: PessoaUsuaria): Observable<PessoaUsuaria> {
    console.log('recebendo', newUser);
    return this.httpClient.post<PessoaUsuaria>(
      `${this.apiUrl}/auth/cadastro`,
      newUser
    );
  }
  buscarCadastro(): Observable<PessoaUsuaria> {
    return this.httpClient.get<PessoaUsuaria>(`${this.apiUrl}/auth/perfil`);
  }
  editarCadastro(pessoaUsuaria: PessoaUsuaria): Observable<PessoaUsuaria> {
    return this.httpClient.patch<PessoaUsuaria>(
      `${this.apiUrl}/auth/perfil`,
      pessoaUsuaria
    );
  }
}

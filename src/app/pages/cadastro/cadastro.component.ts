import { CadastroService } from './../../core/services/cadastro.service';
import { Component, NgModule } from '@angular/core';
import { FormularioService } from '../../core/services/formulario.service';
import { PessoaUsuaria } from '../../core/types/pessoa-usuaria';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss',
})
export class CadastroComponent {
  constructor(
    private formularioService: FormularioService,
    private cadastroService: CadastroService,
    private router: Router
  ) {}

  cadastrar() {
    const formCadastro = this.formularioService.getCadastro();

    if (formCadastro?.valid) {
      const newUser = formCadastro.getRawValue() as PessoaUsuaria;
      this.cadastroService.cadastrar(newUser).subscribe({
        next: (value) => {
          console.log('enviado', value);
          this.router.navigateByUrl('/login');
        },
        error: (err) => {
          console.log('Erro no cadastro ', err);
        },
      });
    }
  }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuscaService } from '../../core/services/form-busca.service';

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrl: './form-busca.component.scss',
})
export class FormBuscaComponent {
  @Output() realizaBusca = new EventEmitter();

  constructor(public formBuscaService: FormBuscaService) {}
  buscar() {
    if (this.formBuscaService.formEstaValido) {
      const formBuscaValue = this.formBuscaService.obterDadosBusca();
      this.realizaBusca.emit(formBuscaValue);
    } else {
      alert('O formulario precisa ser preenchido');
    }
  }
}

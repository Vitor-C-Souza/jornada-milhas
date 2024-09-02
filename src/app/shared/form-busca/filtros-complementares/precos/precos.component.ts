import { FormControl } from '@angular/forms';
import { FormBuscaService } from '../../../../core/services/form-busca.service';
import { PassagensService } from './../../../../core/services/passagens.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-precos',
  templateUrl: './precos.component.html',
  styleUrl: './precos.component.scss',
})
export class PrecosComponent {
  precoMin: FormControl<number>;
  precoMax: FormControl<number>;

  constructor(
    public passagensService: PassagensService,
    private formBuscaService: FormBuscaService
  ) {
    this.precoMin = formBuscaService.obterControle<number>('precoMin');
    this.precoMax = formBuscaService.obterControle<number>('precoMax');
  }
}

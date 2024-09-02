import { Resultado } from './../../core/types/resultado';
import { Passagem } from '../../core/types/passagem';
import { PassagensService } from './../../core/services/passagens.service';
import { Component, OnInit } from '@angular/core';
import { FormBuscaService } from '../../core/services/form-busca.service';
import { DadosBusca } from '../../core/types/dados-busca';
import { pipe, take } from 'rxjs';
import { Destaques } from '../../core/types/destaques';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrl: './busca.component.scss',
})
export class BuscaComponent implements OnInit {
  passagens: Passagem[] = [];
  destaques?: Destaques;
  constructor(
    private passagensService: PassagensService,
    private formBuscaService: FormBuscaService
  ) {}
  ngOnInit(): void {
    const buscaPadrao: DadosBusca = {
      dataIda: new Date().toISOString(),
      pagina: 1,
      porPagina: 25,
      somenteIda: false,
      passageirosAdultos: 1,
      tipo: 'Executiva',
    };

    const busca = this.formBuscaService.formEstaValido
      ? this.formBuscaService.obterDadosBusca()
      : buscaPadrao;
    this.passagensService
      .getPassagens(busca)
      .pipe(take(1))
      .subscribe((res) => {
        console.log(res);
        this.passagens = res.resultado;
        this.formBuscaService.formBusca.patchValue({
          precoMin: res.precoMin,
          precoMax: res.precoMax,
        });
      });
  }
  busca(ev: DadosBusca) {
    this.passagensService.getPassagens(ev).subscribe((res) => {
      console.log(res);
      this.passagens = res.resultado;
    });
  }

  obterDestaques() {
    this.destaques = this.passagensService.obterPassagensDestaques(
      this.passagens
    );
  }
}

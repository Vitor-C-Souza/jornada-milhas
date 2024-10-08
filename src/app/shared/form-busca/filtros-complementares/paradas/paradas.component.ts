import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuscaService } from '../../../../core/services/form-busca.service';

interface OpcoesDeParada {
  display: string;
  value: string;
}

@Component({
  selector: 'app-paradas',
  templateUrl: './paradas.component.html',
  styleUrl: './paradas.component.scss',
})
export class ParadasComponent implements OnInit {
  opcoesSelecionada: OpcoesDeParada | null = null;

  opcoes = [
    {
      display: 'Direto',
      value: '0',
    },
    {
      display: '1 conexão',
      value: '1',
    },
    {
      display: '2 conexões',
      value: '2',
    },
    {
      display: 'Mais de 2 conexões',
      value: '3',
    },
  ];

  conexoesControl: FormControl<number | null>;

  constructor(private formBuscaService: FormBuscaService) {
    this.conexoesControl =
      this.formBuscaService.obterControle<number>('conexoes');
  }
  ngOnInit(): void {
    this.conexoesControl.valueChanges.subscribe((value) => {
      if (value === null) {
        this.opcoesSelecionada = null;
      }
    });
  }

  paradaSelecionada(opcao: OpcoesDeParada): boolean {
    return this.opcoesSelecionada === opcao;
  }

  alternarParada(opcao: OpcoesDeParada, checked: boolean) {
    if (!checked) {
      this.opcoesSelecionada = null;
      this.formBuscaService.formBusca.patchValue({
        conexoes: null,
      });
      return;
    }
    this.opcoesSelecionada = opcao;
    this.formBuscaService.formBusca.patchValue({
      conexoes: Number(opcao.value),
    });
  }

  incluirParada(opcao: OpcoesDeParada) {
    if (!this.opcoesSelecionada) {
      return false;
    }
    return this.opcoesSelecionada.value > opcao.value;
  }
}

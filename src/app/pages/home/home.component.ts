import { Component, OnInit } from '@angular/core';
import { PromocaoService } from '../../core/services/promocao.service';
import { Promocao } from '../../core/types/promocao';
import { DepoimentosService } from '../../core/services/depoimentos.service';
import { Depoimento } from '../../core/types/depoimento';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(
    private promocaoService: PromocaoService,
    private depoimentoService: DepoimentosService
  ) {}

  promocoes: Promocao[] = [];
  depoimentos: Depoimento[] = [];

  ngOnInit(): void {
    this.promocaoService.listar().subscribe((values) => {
      this.promocoes = values;
    });

    this.depoimentoService.listar().subscribe((values) => {
      this.depoimentos = values;
    });
  }
}

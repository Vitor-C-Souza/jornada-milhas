import { Component, OnInit } from '@angular/core';
import { PromocaoService } from '../../core/services/promocao.service';
import { Promocao } from '../../core/types/promocao';
import { DepoimentosService } from '../../core/services/depoimentos.service';
import { Depoimento } from '../../core/types/depoimento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(
    private promocaoService: PromocaoService,
    private depoimentoService: DepoimentosService,
    private router: Router
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
  navegarParaBusca($event: any) {
    this.router.navigateByUrl('/busca');
  }
}

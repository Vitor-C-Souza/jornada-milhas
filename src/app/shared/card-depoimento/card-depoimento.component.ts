import { Component, Input, OnInit } from '@angular/core';
import { Depoimento } from '../../core/types/depoimento';

@Component({
  selector: 'app-card-depoimento',
  templateUrl: './card-depoimento.component.html',
  styleUrl: './card-depoimento.component.scss',
})
export class CardDepoimentoComponent implements OnInit {
  @Input() depoimento!: Depoimento;

  description: string = '';
  autor: string = '';
  src: string = '';

  ngOnInit(): void {
    this.description = this.depoimento.texto;
    this.autor = this.depoimento.autor;
    this.src = this.depoimento.avatar;
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-busca',
  templateUrl: './card-busca.component.html',
  styleUrl: './card-busca.component.scss',
})
export class CardBuscaComponent {
  @Input() destino: string = '';
  @Input() src: string = '';
  @Input() alt: string = '';
  @Input() preco: number = 0;
}

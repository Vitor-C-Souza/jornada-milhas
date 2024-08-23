import { Component } from '@angular/core';

@Component({
  selector: 'app-card-depoimento',
  templateUrl: './card-depoimento.component.html',
  styleUrl: './card-depoimento.component.scss',
})
export class CardDepoimentoComponent {
  description: string =
    'Minha viagem com a Jornada foi incrível! Recomendo muito a agência para quem busca uma experiência emocionante e personalizada a partir das nossas necessidades.';
  autor: string = 'Mariana Faustino';
}

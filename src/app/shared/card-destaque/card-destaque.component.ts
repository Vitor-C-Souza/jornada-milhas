import { Component, Input } from '@angular/core';
import { Passagem } from '../../core/types/passagem';

@Component({
  selector: 'app-card-destaque',
  templateUrl: './card-destaque.component.html',
  styleUrl: './card-destaque.component.scss',
})
export class CardDestaqueComponent {
  @Input() destacadaPor: string = '';
  @Input() passagem?: Passagem;
  @Input() variant: 'primary' | 'secondary' | 'default' = 'primary';
}

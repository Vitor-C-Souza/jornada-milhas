import { Passagem } from './../../core/types/passagem';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-passagem',
  templateUrl: './passagem.component.html',
  styleUrl: './passagem.component.scss',
})
export class PassagemComponent implements OnInit {
  @Input() passagem!: Passagem;
  textoIdaVolta: string = '';

  ngOnInit(): void {
    if (this.passagem.dataVolta) {
      this.textoIdaVolta = 'Ida e Volta';
    } else {
      this.textoIdaVolta = 'Somente ida';
    }
  }
}

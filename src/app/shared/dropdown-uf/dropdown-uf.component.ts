import { FormControl } from '@angular/forms';
import { EstadosService } from '../../core/services/estados.service';
import { Estado } from '../../core/types/estado';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map, startWith } from 'rxjs';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrl: './dropdown-uf.component.scss',
})
export class DropdownUfComponent implements OnInit {
  @Input() label: string = '';
  @Input() iconePrefixo: string = '';
  @Input() control!: FormControl;
  @Input() placeholder: string = '';

  filteredOptions$?: Observable<Estado[]>;

  estados: Estado[] = [];

  constructor(private estadosService: EstadosService) {}

  ngOnInit(): void {
    this.estadosService.listar().subscribe((dados) => {
      this.estados = dados;
    });

    this.filteredOptions$ = this.control.valueChanges.pipe(
      startWith(''),
      map((value) => this.filtrarUfs(value))
    );
  }

  filtrarUfs(value: string | Estado): Estado[] {
    const nomeUf = typeof value === 'string' ? value : value?.nome;
    const valorFiltrado = nomeUf?.toLowerCase();
    const result = this.estados.filter((estado) =>
      estado.nome.toLowerCase().includes(valorFiltrado)
    );
    return result;
  }

  displayFn(estado: Estado): string {
    return estado && estado.nome ? estado.nome : '';
  }
}

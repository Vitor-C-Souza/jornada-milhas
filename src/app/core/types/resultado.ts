import { Passagem } from './passagem';

export interface Resultado {
  paginaAtual: number;
  ultimaPagina: number;
  total: number;
  precoMin: number;
  precoMax: number;
  resultado: Passagem[];
}

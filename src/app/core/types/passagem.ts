import { Companhia } from './companhia';
import { Estado } from './estado';
import { Orcamento } from './orcamento';

export interface Passagem {
  tipo: string;
  precoIda: number;
  precoVolta: number;
  taxaEmbarque: number;
  conexoes: number;
  tempoVoo: number;
  origem: Estado;
  destino: Estado;
  companhia: Companhia;
  dataIda: Date;
  dataVolta: Date;
  total: number;
  orcamento: Orcamento[];
}

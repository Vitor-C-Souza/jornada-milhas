import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';
import { Estado } from '../types/estado';

@Injectable({
  providedIn: 'root',
})
export class EstadosService {
  private apiUrl: string = environment.apiUrl;
  private cache$?: Observable<Estado[]>;

  constructor(private httpClient: HttpClient) {}

  listar(): Observable<Estado[]> {
    if (!this.cache$) {
      this.cache$ = this.requestEstados().pipe(shareReplay(1));
    }
    return this.cache$;
  }

  private requestEstados(): Observable<Estado[]> {
    return this.httpClient.get<Estado[]>(`${this.apiUrl}/estados`);
  }
}

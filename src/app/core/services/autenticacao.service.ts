import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { UserService } from './user.service';

interface AuthResponse {
  access_token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  private apiUrl: string = environment.apiUrl;

  constructor(
    private httpClient: HttpClient,
    private userService: UserService
  ) {}

  autenticar(
    email: string,
    senha: string
  ): Observable<HttpResponse<AuthResponse>> {
    return this.httpClient
      .post<AuthResponse>(
        `${this.apiUrl}/auth/login`,
        {
          email,
          senha,
        },
        { observe: 'response' }
      )
      .pipe(
        tap((response) => {
          const authtoken = response.body?.access_token || '';
          this.userService.salvarToken(authtoken);
        })
      );
  }
}

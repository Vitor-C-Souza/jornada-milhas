import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacaoService } from '../../core/services/autenticacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AutenticacaoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.email, Validators.required]],
      senha: [null, Validators.required],
    });
  }

  login() {
    const email = this.loginForm.value.email;
    const senha = this.loginForm.value.senha;

    this.authService.autenticar(email, senha).subscribe({
      next: (value) => {
        console.log('Login realizado com sucesso. ', value);
        this.router.navigateByUrl('/');
      },
      error: (err) => {
        console.log('Erro no login ', err);
      },
    });
  }
}

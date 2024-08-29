import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Estado } from '../../core/types/estado';
import { FormularioService } from '../../core/services/formulario.service';
import { formValidations } from '../form-validations';

@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrl: './form-base.component.scss',
})
export class FormBaseComponent implements OnInit {
  cadastroForm!: FormGroup;
  estadoControl = new FormControl<Estado | null>(null, Validators.required);
  @Input() perfilComponent: boolean = false;
  @Input() titulo: string = 'Crie sua conta';
  @Input() textoBotao: string = 'CADASTRAR';
  @Output() acaoClique: EventEmitter<any> = new EventEmitter<any>();
  @Output() sair: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private formBuilder: FormBuilder,
    private formularioService: FormularioService
  ) {}

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group({
      nome: [null, Validators.required],
      nascimento: [null, Validators.required],
      genero: ['outro'],
      cpf: [
        null,
        [
          Validators.required,
          Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/),
        ],
      ],
      telefone: [
        null,
        [Validators.required, Validators.pattern(/^\(\d{2}\) \d{4,5}-\d{4}$/)],
      ],
      cidade: [null, Validators.required],
      estado: this.estadoControl,
      email: [null, [Validators.required, Validators.email]],
      senha: [null, Validators.required],
      confirmEmail: [
        null,
        [
          Validators.required,
          Validators.email,
          formValidations.equalTo('email'),
        ],
      ],
      confirmSenha: [
        null,
        [Validators.required, formValidations.equalTo('senha')],
      ],
      aceitarTermos: [null, [Validators.requiredTrue]],
    });

    if (this.perfilComponent) {
      this.cadastroForm.get('aceitarTermos')?.setValidators(null);
    } else {
      this.cadastroForm
        .get('aceitarTermos')
        ?.setValidators([Validators.requiredTrue]);
    }

    this.cadastroForm.get('aceitarTermos')?.updateValueAndValidity();

    this.formularioService.setCadastro(this.cadastroForm);
  }

  executarAcao() {
    this.acaoClique.emit();
  }

  deslogar() {
    this.sair.emit();
  }
}

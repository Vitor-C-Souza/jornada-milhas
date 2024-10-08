import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-seletor-passageiro',
  templateUrl: './seletor-passageiro.component.html',
  styleUrl: './seletor-passageiro.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SeletorPassageiroComponent),
      multi: true,
    },
  ],
})
export class SeletorPassageiroComponent implements ControlValueAccessor {
  @Input() titulo: string = '';
  @Input() subtitulo: string = '';

  value: number = 0;
  onChange = (value: number) => {};
  onTouch = () => {};

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onChange = fn;
  }
  setDisabledState?(isDisabled: boolean): void {}

  incrementar() {
    this.value += 1;
    this.onChange(this.value);
    this.onTouch();
  }
  decrementar() {
    if (this.value > 0) {
      this.value -= 1;
      this.onChange(this.value);
      this.onTouch();
    }
  }
}

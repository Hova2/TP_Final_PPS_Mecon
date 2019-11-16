import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.scss'],
})

export class InputPasswordComponent implements OnInit {
  @Output() salidaPassword: EventEmitter<string>;
  password: string;

  cumple = false;

  constructor() {
    this.salidaPassword = new EventEmitter();
  }

  ngOnInit() {}

  v_password() {
     console.log(this.val_letras(this.password));
     if (this.password.length < 5 || this.password.length > 30 || 
    !this.val_letras(this.password) || !this.val_caracteres_obligatorios_num(this.password) 
    || !this.val_caracteres_obligatorios_may(this.password)
    || !this.val_caracteres_obligatorios_min(this.password)) {
      this.cumple = false;
    } else {
      this.cumple = true;
      this.salidaPassword.emit(this.password);
    }

  }

  public val_letras(palabra: string): boolean {
   let estado = true;
   const l = '.:,;{}[]()\'¿¡-!?';
   let i: number;
   for (i = 0; i < palabra.length; i++)

  {
    for (let n of l)
    {
      if (palabra[i] === n)
      {
        estado = false;
        break;
      }
    }
  }

   return estado;
  }

  public val_caracteres_obligatorios_num(palabra: string): boolean{
  let validacion = false;
  const num = '1234567890';
  let i: number;
  for (i = 0; i < palabra.length; i++) {
    for (let n of num)
    {
      if (palabra[i] === n)
      {
        validacion = true;
        break;
      }
    }
  }
  return validacion;
 }

 public val_caracteres_obligatorios_may(palabra: string): boolean {
  let validacion = false;
  const lm = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
  let i: number;
  for (i = 0; i < palabra.length; i++) {
    for (let n of lm)
    {
      if (palabra[i] === n)
      {
        validacion = true;
        break;
      }
    }
  }
  return validacion;
 }

 public val_caracteres_obligatorios_min(palabra: string): boolean {
  let validacion = false;
  const lmin = 'abcdefghijklmnñopqrstuvwxyz';
  let i: number;
  for (i = 0; i < palabra.length; i++) {
    for (let n of lmin)
    {
      if (palabra[i] === n)
      {
        validacion = true;
        break;
      }
    }
  }
  return validacion;
 }

}

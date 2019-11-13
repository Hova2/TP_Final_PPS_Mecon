import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-apellido',
  templateUrl: './input-apellido.component.html',
  styleUrls: ['./input-apellido.component.scss'],
})

export class InputApellidoComponent implements OnInit {
  @Output() salidaApellido: EventEmitter<string>;
  apellido: string;

  cumple = false;

  constructor() {
    this.salidaApellido = new EventEmitter();
  }

  ngOnInit() {}

  v_apellido() {
     console.log(this.val_letras(this.apellido));

     if (this.apellido.length < 5 || this.apellido.length > 30 || !this.val_letras(this.apellido)) {
      this.cumple = false;
    } else {
      this.cumple = true;
      this.salidaApellido.emit(this.apellido);
    }

  }

  public val_letras(palabra: string): boolean

  {
   let estado = true;
   const l = '1234567890.:,;{}[]()\'¿¡-!? ';
   let i: number;
   for (i = 0; i < palabra.length;i++)

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
}
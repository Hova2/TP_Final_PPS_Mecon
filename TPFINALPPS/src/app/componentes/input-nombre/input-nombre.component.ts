import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-input-nombre",
  templateUrl: "./input-nombre.component.html",
  styleUrls: ["./input-nombre.component.scss"]
})
export class InputNombreComponent implements OnInit {
  @Output() salidaNombre: EventEmitter<string>;
  nombre: string;

  cumple = false;

  constructor() {
    this.salidaNombre = new EventEmitter();
  }

  ngOnInit() {}

  v() {
     console.log(this.val_letras(this.nombre));

     if (this.nombre.length < 5 || !this.val_letras(this.nombre)) {
      this.cumple = false;
    } else {
      this.cumple = true;
      this.salidaNombre.emit(this.nombre);
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

import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Validators } from '@angular/forms';
import { element } from 'protractor';

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
     console.log(this.nombre);
  

    if (this.nombre.length < 5 ){// && this.val_letras(this.nombre)) {
      this.cumple = false;
    } else {
      this.cumple = true;
      this.salidaNombre.emit(this.nombre);
    }

  }

  public val_letras(palabra:string) :boolean

  {
   let estado = false;
   const l = "1234567890.:,;{}[]()'¿¡-!?";
   
  for(let p of palabra )
  {
    for(let n of l)
    {
      if(p===l)
      {
        //console.log("pe: ",p,"ele: ",l);
      
        estado = false;
        break;
      }
    }
  }

  return estado;
   
  }
}

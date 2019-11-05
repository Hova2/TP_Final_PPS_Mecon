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
    console.log(this.nombre);

    if (this.nombre.length <= 5) {
      this.cumple = false;
    } else {
      this.cumple = true;
      this.salidaNombre.emit(this.nombre);
    }

  }
}

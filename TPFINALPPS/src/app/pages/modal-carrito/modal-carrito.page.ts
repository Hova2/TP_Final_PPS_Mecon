import { Component, OnInit } from '@angular/core';
import { Product, ServicioCarritoService } from 'src/app/servicios/servicio-carrito.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-carrito',
  templateUrl: './modal-carrito.page.html',
  styleUrls: ['./modal-carrito.page.scss'],
})
export class ModalCarritoPage implements OnInit {

  carrito: Product[] = [];

  constructor(private servicioCarrito: ServicioCarritoService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.carrito = this.servicioCarrito.getCarrito();
  }

  descontarItemCarrito(producto) {
    this.servicioCarrito.descontarProducto(producto);
  }

  incrementarItemCarrito(producto) {
    this.servicioCarrito.agregarProducto(producto);
  }

  eliminarItemCarrito(producto) {
    this.servicioCarrito.eliminarProducto(producto);
  }

  getTotal() {
    return this.carrito.reduce((i, j) => i + j.precio * j.cantidad, 0);
  }

  close() {
    this.modalCtrl.dismiss();
  }

  pedir() {

  }

}

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ServicioCarritoService } from 'src/app/servicios/servicio-carrito.service';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { ModalCarritoPage } from '../modal-carrito/modal-carrito.page';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.page.html',
  styleUrls: ['./carrito-compras.page.scss'],
})
export class CarritoComprasPage implements OnInit {

  carrito = [];
  productos = [];
  contadorItemsCarrito: BehaviorSubject<number>;

  @ViewChild('cart', {static: false, read: ElementRef})fab: ElementRef;

  constructor(private servicioCarritoService: ServicioCarritoService, private modalCtrl: ModalController) { }

  ngOnInit() {

    this.productos = this.servicioCarritoService.getProductos();
    this.carrito = this.servicioCarritoService.getCarrito();
    this.contadorItemsCarrito = this.servicioCarritoService.getContadorItemsCarrito();
    console.log(this.productos);
    console.log(this.carrito);
    console.log(this.contadorItemsCarrito);
  }

  agregarAlCarrito(producto) {
    this.animateCss('tada');
    this.servicioCarritoService.agregarProducto(producto);
  }

  async abrirCarrito() {
    this.animateCss('bounceOutLeft');
    let modal = await this.modalCtrl.create({
      component: ModalCarritoPage,
      cssClass: 'cart-modal'
    });
    modal.onWillDismiss().then(() => {
      this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft');
      this.animateCss('bounceInLeft');
    })
    modal.present();
  }

  animateCss(animationName, keepAnimated = false){
    const node = this.fab.nativeElement;
    node.classList.add('animated', animationName)

    function handleAnimationEnd(){
      if(!keepAnimated){
        node.classList.remove('animated', animationName);
      }
      node.removeEventListener('animationend', handleAnimationEnd)
    }
    node.addEventListener('animationend', handleAnimationEnd)
  }

}

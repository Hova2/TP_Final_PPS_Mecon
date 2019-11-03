import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export interface Product{
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;  
}
@Injectable({
  providedIn: 'root'
})
export class ServicioCarritoService {
  data: Product[]=[
    {id:0, nombre:'Pizza', precio: 200, cantidad: 1},
    {id:1, nombre:'Milanesa', precio: 400, cantidad: 1},
    {id:2, nombre:'Pancho', precio: 80, cantidad: 1},
    {id:3, nombre:'Coca', precio: 50, cantidad: 1}
  ];

  private carrito = [];
  private contadorItemsCarrito = new BehaviorSubject(0);
  constructor() { }

  getProductos(){
    return this.data;
  }

  getCarrito(){
    return this.carrito;
  }

  getContadorItemsCarrito(){
    return this.contadorItemsCarrito;
  }

  agregarProducto(producto){
    let agregado = false;
    for( let p of this.carrito){
      if(p.id === producto.id){
        p.cantidad +=1;
        agregado = true;
        break;
      }
    }
    if(!agregado){
      this.carrito.push(producto);
    }
    this.contadorItemsCarrito.next(this.contadorItemsCarrito.value +1);
  }

  descontarProducto(producto){
    for(let [index, p] of this.carrito.entries()){
      if(p.id === producto.id){
        p.cantidad -=1;
        if(p.cantidad == 0){
          this.carrito.splice(index,1);
        }
      }
    }
    this.contadorItemsCarrito.next(this.contadorItemsCarrito.value -1);
  }

  eliminarProducto(producto){
    for(let [index, p] of this.carrito.entries()){
      if(p.id === producto.id){
        this.contadorItemsCarrito.next(this.contadorItemsCarrito.value - p.cantidad);
        this.carrito.splice(index, 1);
      }
    }
  }
}

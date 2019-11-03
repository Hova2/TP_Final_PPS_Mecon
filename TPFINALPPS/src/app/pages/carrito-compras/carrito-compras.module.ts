import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CarritoComprasPage } from './carrito-compras.page';

const routes: Routes = [
  {
    path: '',
    component: CarritoComprasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CarritoComprasPage]
})
export class CarritoComprasPageModule {}

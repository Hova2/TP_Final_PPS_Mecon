import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmpleadoPage } from './empleado.page';
import { NuestrosComponentesModule } from 'src/app/componentes/nuestros-componentes.module';

const routes: Routes = [
  {
    path: '',
    component: EmpleadoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NuestrosComponentesModule
  ],
  declarations: [EmpleadoPage]
})
export class EmpleadoPageModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LeerQRComponent } from './leer-qr/leer-qr.component';
import { SacarFotoComponent } from './sacar-foto/sacar-foto.component';
import { AvatarComponent } from './avatar/avatar.component';
import { SplashComponent } from './splash/splash.component';
import { InputNombreComponent } from './input-nombre/input-nombre.component';
import { FormsModule } from '@angular/forms';
import { InputApellidoComponent } from './input-apellido/input-apellido.component';
import { InputPasswordComponent } from './input-password/input-password.component';




@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [LeerQRComponent, SacarFotoComponent, AvatarComponent, SplashComponent, InputNombreComponent, InputApellidoComponent, InputPasswordComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [LeerQRComponent, SacarFotoComponent, AvatarComponent, SplashComponent, InputNombreComponent, InputApellidoComponent, InputPasswordComponent]
})
export class NuestrosComponentesModule { }

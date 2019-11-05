import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate
} from '@angular/router';
import { UsuarioService } from '../servicios/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private usrService: UsuarioService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let salida = false;

    console.log(this.usrService.traerUsuarioActivo());


    if (this.usrService.traerUsuarioActivo()) {
      salida = true;
    }
    
    return salida;
  }
}

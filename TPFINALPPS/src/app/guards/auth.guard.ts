import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
  Router
} from '@angular/router';

import { Observable } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';
import { UsuarioService } from '../servicios/usuario.service';
import { Cliente } from '../clases/cliente';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private usuarioService: UsuarioService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.usuarioService.traerUsuarioActivo().pipe(
      take(1),
      tap(usuario => {
        if (usuario) {
          if (!(usuario.rol === next.data.rol)) {
            this.router.navigate(['/login']);
          }
        }
      }),
      map(usuario => !!usuario),
      tap(estaIniciado => {
        if (!estaIniciado) {
          this.router.navigate(['/login']);
        }
      })
    );
  }
}

import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
  Router
} from '@angular/router';

import { AuthService } from '../servicios/auth.service';
import { Observable } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.usuarioActualObservable().pipe(
      take(1),
      map(usuario => !!usuario),
      tap(estaIniciado => {
        if (!estaIniciado) {
          this.router.navigate(['/login']);
        }
      })
    );
  }
}

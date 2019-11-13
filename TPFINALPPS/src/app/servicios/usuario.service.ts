import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Usuario } from '../clases/usuario';
import { Cliente } from '../clases/cliente';
import { Supervisor } from '../clases/supervisor';
import { Empleado } from '../clases/empleado';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuario$: Observable<Usuario>;

  constructor(
    private firestore: AngularFirestore,
    private angularFireAuth: AngularFireAuth
  ) {
    this.usuario$ = this.buscarUsuarioFirebase();
  }

  persistirUsuario(usuario: Usuario, uid: string) {
    this.firestore
      .collection('/usuarios')
      .doc(uid)
      .set(Object.assign({}, JSON.parse(JSON.stringify(usuario))));
  }

  private buscarUsuarioFirebase(): Observable<Usuario> {
    const salida = this.angularFireAuth.authState.pipe(
      switchMap(usuario => {
        if (usuario) {
          const documento = this.firestore
            .collection('/usuarios')
            .doc(usuario.uid)
            .ref.get();
          return documento.then(doc => {
            const datos = JSON.parse(JSON.stringify(doc.data()));
            switch (datos.rol) {
              case 'cliente':
                return this.firestore
                  .doc<Cliente>('usuarios/' + usuario.uid)
                  .valueChanges() as Observable<Cliente>;
              case 'supervisor':
                return this.firestore
                  .doc<Supervisor>('usuarios/' + usuario.uid)
                  .valueChanges() as Observable<Supervisor>;
              case 'empleado':
                return this.firestore
                  .doc<Empleado>('usuarios/' + usuario.uid)
                  .valueChanges() as Observable<Empleado>;
            }
          });
        } else {
          return of(null);
        }
      })
    );
    return salida;
  }

  traerUsuarioActivo(): Observable<Usuario> {
    return this.usuario$;
  }
}

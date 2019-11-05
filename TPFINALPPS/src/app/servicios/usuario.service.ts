import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Usuario } from '../clases/usuario';
import { Cliente } from '../clases/cliente';
import { Supervisor } from '../clases/supervisor';
import { Empleado } from '../clases/empleado';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private firestore: AngularFirestore) {}

  persistirUsuario(usuario: Usuario, uid: string) {
    this.firestore
      .collection('/usuarios')
      .doc(uid)
      .set(Object.assign({}, JSON.parse(JSON.stringify(usuario))));
  }

  async traerUsuario(uid: string): Promise<Usuario> {
    let salida = null;

    try {
      const doc = await this.firestore
        .collection('/usuarios')
        .doc(uid)
        .ref.get();
      const datos = JSON.parse(JSON.stringify(doc.data()));
      switch (datos.rol) {
        case 'cliente':
          salida = new Cliente(
            datos.nombre,
            datos.apellido,
            datos.dni,
            datos.foto,
            datos.activo,
            datos.email,
            datos.rol
          );
          break;
        case 'supervisor':
          salida = new Supervisor(
            datos.nombre,
            datos.apellido,
            datos.dni,
            datos.foto,
            datos.activo,
            datos.email,
            datos.rol,
            datos.cuil,
            datos.perfil
          );
          break;
        case 'empleado':
          salida = new Empleado(
            datos.nombre,
            datos.apellido,
            datos.dni,
            datos.foto,
            datos.activo,
            datos.email,
            datos.rol,
            datos.cuil,
            datos.tipoEmpleado
          );
          break;
      }
    } catch (err) {}

    return salida;
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  public mostrar: boolean;
  public chk: boolean;
  public email: string;
  public clave: string;

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  ingresar() {
    this.authService.ingresar(this.email, this.clave);
  }

  registracion() {}

  completar(parametro) {
    switch (parametro) {
      case 'admin':
        this.email = 'admin';
        this.clave = 'admin';
        break;
      case 'user':
        this.email = 'usuario';
        this.clave = 'usuario';
        break;
    }
  }

  checkeado() {
    console.log('Nuevo estado:' + this.chk);
  }
}

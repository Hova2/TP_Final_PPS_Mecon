import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Cliente } from 'src/app/clases/cliente';
import { LeerQRComponent } from '../../componentes/leer-qr/leer-qr.component';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { timer } from 'rxjs';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { InputApellidoComponent} from '../../componentes/input-apellido/input-apellido.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})



export class LoginPage implements OnInit {
  public mostrar: boolean;
  public escrito: string;
  public chk: boolean;
  public email: string;
  public clave: string;
  public showSplash = true;
  public showApp = false;

  // para poder insertar los inputs en la pagina loguin

  public nombre: string;
  public apellido: string;



  constructor(
    private authService: AuthService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
  )
  {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      timer(8000).subscribe(() => {
        this.showSplash = false;
        this.showApp = true;
      });
    });
  }

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

  //leerNombre(n: string){
  //  this.nombre = n;}

  leerApellido(a: string){
    this.apellido = a;
    console.log(this.apellido);// solo lo muestra cuando esta validado!!!
  }


}

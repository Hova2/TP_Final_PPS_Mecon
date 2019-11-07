import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GenerarQRComponent } from './componentes/generar-qr/generar-qr.component';
import { SplashComponent } from './componentes/splash/splash.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)},
  { path: 'qr', loadChildren: './pages/qr/qr.module#QrPageModule' },
  { path: 'qr', loadChildren: './pages/qr/qr.module#QrPageModule' },
  { path: 'splash', component: SplashComponent },
  { path: 'carrito-compras', loadChildren: './pages/carrito-compras/carrito-compras.module#CarritoComprasPageModule' },
  { path: 'modal-carrito', loadChildren: './pages/modal-carrito/modal-carrito.module#ModalCarritoPageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  //{ path: 'pagina-con-tabs', loadChildren: './pages/pagina-con-tabs/pagina-con-tabs.module#PaginaConTabsPageModule' },
  //{ path: 'tab1', loadChildren: './pages/tab1/tab1.module#Tab1PageModule' },
  //{ path: 'tab2', loadChildren: './pages/tab2/tab2.module#Tab2PageModule' }

  //{ path: 'prueba', loadChildren: './pages/lectorqr/lectorqr.page.html' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

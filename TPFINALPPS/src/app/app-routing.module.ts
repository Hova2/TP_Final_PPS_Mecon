import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'empleado',
    loadChildren: './pages/empleado/empleado.module#EmpleadoPageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'supervisor',
    loadChildren: './pages/supervisor/supervisor.module#SupervisorPageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'cliente',
    loadChildren: './pages/cliente/cliente.module#ClientePageModule',
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

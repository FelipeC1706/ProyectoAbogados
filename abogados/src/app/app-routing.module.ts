import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeticionesComponent } from './componentes/peticiones/peticiones.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';


//components
import { LoginComponent } from './componentes/login/login.component';
import { ActualizarComponent } from './componentes/actualizar/actualizar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'peticiones', component: PeticionesComponent},
  {path: 'actualizar', component: ActualizarComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: '**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

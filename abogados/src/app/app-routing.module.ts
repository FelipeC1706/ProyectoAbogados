import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeticionesComponent } from './componentes/peticiones/peticiones.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';


//components
import { LoginComponent } from './componentes/login/login.component';
import { ActualizarComponent } from './componentes/actualizar/actualizar.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent , canActivate: [AuthGuard]},
  {path: 'peticiones', component: PeticionesComponent, canActivate: [AuthGuard]},
  {path: 'actualizar', component: ActualizarComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

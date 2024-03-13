import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeticionesComponent } from './componentes/peticiones/peticiones.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';


//components
import { LoginComponent } from './componentes/login/login.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { DatatableComponent } from './componentes/datatable/datatable.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'datatable', component: DatatableComponent},
  {path: '**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeticionesComponent } from './componentes/peticiones/peticiones.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';

const routes: Routes = [{path: "peticiones", component: PeticionesComponent},
{path: "dashboard", component: DashboardComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

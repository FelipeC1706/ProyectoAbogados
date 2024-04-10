import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { LoginComponent } from './componentes/login/login.component';
import {PeticionesComponent}from './componentes/peticiones/peticiones.component';
import {DataTablesModule} from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ActualizarComponent } from './componentes/actualizar/actualizar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PeticionesComponent,
    LoginComponent,
    ActualizarComponent,
    InicioComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

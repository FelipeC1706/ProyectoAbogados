import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  datalocal:any;
  correo: string='';
  cedula: string='';
  nombre: string='';

  ngOnInit(): void{
    const abogado = localStorage.getItem("abogado");
    if (abogado) {
      try {
        this.datalocal = JSON.parse(abogado);
        this.nombre = `${this.datalocal[0].abo_nombres} ${this.datalocal[0].abo_apellidos}`;
        this.cedula = this.datalocal[0].abo_documento;
        this.correo = this.datalocal[0].abo_correo;
      } catch (error) {
        console.error("Error al parsear estudiante: ", error);
      }
    }
  }

}

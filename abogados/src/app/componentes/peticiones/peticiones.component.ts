import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-peticiones',
  templateUrl: './peticiones.component.html',
  styleUrls: ['./peticiones.component.css']
})
export class PeticionesComponent implements OnInit{

  data: any;

  datalocal: any;

  documento: string='';

  dtOptions: DataTables.Settings = {};

  constructor(){}

  ngOnInit(): void {
    
    this.getPeticiones();

    this.dtOptions = {
          columns: [
            { title: 'Id', data: 'pet_id' },
            { title: 'descripcion', data: 'pet_descripcion' },
            { title: 'fecha registro', data: 'pet_fecha_registro' },
            { title: 'fecha respuesta', data: 'pet_fecha_respuesta' },
            { title: 'id tipo', data: 'tipo_pe_id' },
            { title: 'tipo peticion', data: 'tipo_pe_descripcion' },
            { title: 'documento abogado', data: 'abo_documento' },
            { title: 'id cliente', data: 'id_clientes' },
            { title: 'cliente', data: 'cliente' },
            { title: 'id seguimiento', data: 'seg_id' },
            { title: 'seguimiento', data: 'seg_descripcion' },
            { title: 'prioridad', data: 'pet_prioridad' },
            { title: 'acciones'}
          ],
          pagingType: 'full_numbers',
        };
        
  }

  ngOnChanges(): void{
    this.getPeticiones();

    this.dtOptions = {
          columns: [
            { title: 'Id', data: 'pet_id' },
            { title: 'descripcion', data: 'pet_descripcion' },
            { title: 'fecha registro', data: 'pet_fecha_registro' },
            { title: 'fecha respuesta', data: 'pet_fecha_respuesta' },
            { title: 'tipo peticion', data: 'tipo_pe_descripcion' },
            { title: 'documento abogado', data: 'abo_documento' },
            { title: 'cliente', data: 'cliente' },
            { title: 'seguimiento', data: 'seg_descripcion' },
            { title: 'prioridad', data: 'pet_prioridad' },
            { title: 'acciones'}
          ],
          pagingType: 'full_numbers',
        };
  }

  getPeticiones() {
    const abogado = localStorage.getItem("abogado");
    if (abogado) {
      try {
        this.datalocal = JSON.parse(abogado);
        this.documento=this.datalocal[0].abo_documento;
      } catch (error) {
        console.error("Error al parsear estudiante: ", error);
      }
    }
    fetch(`http://localhost:3000/lawyersRequests/${this.documento}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error en la operación fetch');
        }
      })
      .then(data => {
        this.data = data;
        this.dtOptions = data;
      })
      .catch(error => {
        console.error(error);
    });
  }

}
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-peticiones',
  templateUrl: './peticiones.component.html',
  styleUrls: ['./peticiones.component.css']
})
export class PeticionesComponent implements OnInit{

  data: any;

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
            { title: 'tipo peticion', data: 'tipo_pe_id' },
            { title: 'documento abogado', data: 'abo_documento' },
            { title: 'cliente', data: 'id_clientes' },
            { title: 'seguimiento', data: 'seg_id' },
            { title: 'prioridad', data: 'pet_prioridad' }
          ],
          pagingType: 'full_numbers',
        };
        
  }

  getPeticiones() {
    fetch('http://localhost:3000/requests')
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
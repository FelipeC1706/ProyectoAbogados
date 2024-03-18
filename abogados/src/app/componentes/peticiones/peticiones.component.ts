import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peticiones',
  templateUrl: './peticiones.component.html',
  styleUrls: ['./peticiones.component.css']
})
export class PeticionesComponent implements OnInit{

  dtOptions: DataTables.Settings = {};

  constructor(){}

  ngOnInit(): void {
    this.dtOptions = {
          pagingType: 'full_numbers',
          language: {
            url: '//cdn.datatables.net/plug-ins/1.11.5/i18n/Spanish.json'
          }
    };
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peticiones',
  templateUrl: './peticiones.component.html',
  styleUrls: ['./peticiones.component.css']
})
export class DatatableComponent implements OnInit{

  dtOptions: DataTables.Settings = {};

  constructor(){}

  ngOnInit(): void {
    this.dtOptions = {
          pagingType: 'full_numbers'
    };
  }

}

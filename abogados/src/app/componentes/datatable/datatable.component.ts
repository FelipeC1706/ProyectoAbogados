import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
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

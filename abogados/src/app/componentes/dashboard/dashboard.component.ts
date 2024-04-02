import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor( private router: Router) {}
  logout(){
    fetch('http://localhost:3000/logout/', {
      method: 'POST',
  })
  .then(response => {
      if (response.ok) {
        console.log("Todo bien");
        this.router.navigate(['/login']);
      } else {
          // Si la respuesta es un error (código de estado diferente de 200), mostrar un mensaje de error
          console.log("Todo mal");
      }
  })
  .catch(error=>{
      console.log(error);
  });
  }
}

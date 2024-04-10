import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {
  item: any;
  seguimientos: any;
  seg_id: number = 0;
  pet_id: number = 0;
  seg_descripcion: string = '';
  est_id: number = 0;
  his_descripcion: string = '';

  constructor(private route: ActivatedRoute, 
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.item = params;
    });
    this.seg_id = this.item.seg_id;
    this.pet_id = this.item.pet_id;
    this.getSeguimiento()
  }


  getSeguimiento(){
    fetch('http://localhost:3000/seguimiento')
    .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error al traer la id novedad');
        }
      })
      .then(data => {
        this.seguimientos = data;
      })
      .catch(error => {
        console.error(error);
    });
  }

  putPeticion() {
    const data = {
      seg_id: this.seg_id,
    };
    const pet_id = this.pet_id;
    fetch(`http://localhost:3000/requests_seg/${pet_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (response.ok) {
        this.toastr.success('Se Actualizo la peticion');
        this.router.navigate(['/peticiones']);
      } else {
        throw new Error('Error en la operación fetch');
      }
    })
    .then(data => {
      console.log('Petición actualizada correctamente:', data);
      // Aquí puedes realizar alguna acción adicional si lo deseas
    })
    .catch(error => {
      console.error('Error al actualizar la petición:', error);
    });

  }

  // postSeguimiento() {
  //   const data = {
  //     seg_descripcion: this.seg_descripcion,
  //   };
  //   fetch('http://localhost:3000/seguimiento', { 
  //     method: 'POST', // Cambiamos el método a 'POST'
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({...data})
  //   })
  //   .then(response => {
  //     if (response.ok) {
  //       this.toastr.success('Se agregó la novedad correctamente');
  //       this.router.navigate(['/actualizar', this.item]);
  //     } else {
  //       throw new Error('Error en la operación fetch');
  //     }
  //   })
  //   .then(data => {
  //     console.log('Petición creada correctamente:', data);
  //   })
  //   .catch(error => {
  //     console.error('Error al crear la petición:', error);
  //   });

  //   // Traer la id de la ultima novedad
  //   fetch('http://localhost:3000/seguimiento')
  //   .then(response => {
  //       if (response.ok) {
  //         return response.json();
  //       } else {
  //         throw new Error('Error al traer la id novedad');
  //       }
  //     })
  //     .then(data => {
  //       this.seg_id = data[data.length - 1].seg_id;
  //     })
  //     .catch(error => {
  //       console.error(error);
  //   });
  // }

  // postEstado() {
  //   const data = {
  //     est_id: this.est_id,
  //     pet_id: this.pet_id,
  //     his_descripcion: this.his_descripcion
  //   };
  //   fetch('http://localhost:3000/estatus/', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(data)
  //   })
  //   .then(response => {
  //     if (response.ok) {
  //       this.toastr.success('Se agrego el estado correctamente');
  //       this.router.navigate(['/actualizar', this.item]);
  //     } else {
  //       throw new Error('Error al cambiar el estado');
  //     }
  //   })
  //   .then(data => {
  //     console.log('Estado creado correctamente:', data);
  //   })
  //   .catch(error => {
  //     console.error('Error al crear el estado:', error);
  //   });
  // }

  
}

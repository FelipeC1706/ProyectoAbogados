import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Abogados } from 'src/app/interfaces/abogados';
import { AbogadoService } from 'src/app/services/abogado.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit{
  username: string = '';
  password: string = '';

  constructor(private toastr: ToastrService, private _abogadoService: AbogadoService,
    private router: Router){}

  ngOnInit(): void {
    
  }

  login(){
    this.toastr.info("esto es"+this.username+ this.password);
    if(this.username == '' || this.password == ''){
        this.toastr.error('Todos los campos son obligatorios');
        return;
    }

    const data = {
        user: this.username, // Cambiado a 'user' para que coincida con el backend
        pass: this.password // Cambiado a 'pass' para que coincida con el backend
    };

    fetch('http://localhost:3000/loginAbo/', {
        method: 'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify(data), // Enviamos los datos en el cuerpo de la solicitud como JSON
    })
    .then(response => {
        if (response.ok) {
            // Si la respuesta es exitosa (código de estado 200), mostrar un mensaje de éxito
            this.toastr.success('Conexión exitosacdgdfh0');
        } else {
            // Si la respuesta es un error (código de estado diferente de 200), mostrar un mensaje de error
            this.toastr.error('Credenciales incorrectas');
        }
    })
    .catch(error=>{
        console.log(error);
    });
}
}

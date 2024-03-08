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
      return
    }

    const abogado: Abogados = {
      abo_correo: this.username,
      abo_password: this.password
    }

    this._abogadoService.login(abogado).subscribe(
           
      data => {
        // Navegar a la ruta dashboard en éxito
        this.router.navigate(['/dashboard']);
      },
      error => {
        // Manejar error aquí
        console.error(error);
        this.toastr.error(error);
        this.toastr.error('Ha ocurrido un error al iniciar sesión, por favor inténtalo de nuevo');
      }
    )
  }
}

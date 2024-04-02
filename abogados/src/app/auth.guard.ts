import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return fetch('http://localhost:3000/validAuthenticated/', {
      method: 'POST',
    })
    .then(response => {
      if (response.ok) {
        return true; // Si el usuario está autenticado, permite la navegación
      } else {
        console.log("Bien");
        return this.router.createUrlTree(['/login']); // Si el usuario no está autenticado, redirige al usuario a la página de inicio de sesión
      }
    })
    .catch(() => {
      console.log("Mal");
      return this.router.createUrlTree(['/login']); // Maneja los errores de la solicitud y redirige al usuario a la página de inicio de sesión
    });
  }
}

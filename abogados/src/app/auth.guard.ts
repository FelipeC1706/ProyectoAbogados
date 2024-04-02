import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private apiBaseUrl = 'http://localhost:3000';

  constructor(private router: Router) {}

  async canActivate(): Promise<boolean | UrlTree> {
    try {
      const response = await fetch(`${this.apiBaseUrl}/validAuthenticated/`, {
        method: 'POST'
      });

      if (response.ok ) {
        return true; // Usuario autenticado, permite la navegación
      } else {
        console.log('Usuario no autenticado');
        return this.router.createUrlTree(['/login']); // Redirige al usuario a la página de inicio de sesión
      }
    } catch (error) {
      console.log('Error al verificar autenticación:', error);
      return this.router.createUrlTree(['/login']); // Maneja errores y redirige al usuario a la página de inicio de sesión
    }
  }
}

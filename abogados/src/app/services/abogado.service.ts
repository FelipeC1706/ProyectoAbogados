import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Abogados} from '../interfaces/abogados';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AbogadoService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.api;
    this.myApiUrl = 'loginAbo/'
  }

  login(abogado: Abogados): Observable<any>{
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`, abogado);
  }
}
import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlEndPoint:string='/api/usuario';

  constructor(private http: HttpClient) { }

  getUsuario(dni): Observable<Usuario>{
    return this.http.get<Usuario>(`${this.urlEndPoint}/${dni}`).pipe(
      map( response =>  response as Usuario )
      );
  }
}

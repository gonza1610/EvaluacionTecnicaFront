import { Injectable } from '@angular/core';
import { Carrito } from './carrito';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Producto } from '../productos/producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private urlEndPoint:string='/api/carrito';
  private urlEndPointEspecial:string='/api/carritoEspecial';

  private urlEndPointAgregar:string='/api/carrito/producto/1';//CAMBIAR
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  create(dni) : Observable<Carrito> {
    return this.http.post<Carrito>(`${this.urlEndPoint}/${dni}`, {headers: this.httpHeaders})
  }
  createEspecial(dni) : Observable<Carrito> {
    return this.http.post<Carrito>(`${this.urlEndPointEspecial}/${dni}`, {headers: this.httpHeaders})
  }
  agregar(producto:Producto) : Observable<Carrito> {
    return this.http.post<Carrito>(`${this.urlEndPointAgregar}`, producto,{headers: this.httpHeaders});
  }
}

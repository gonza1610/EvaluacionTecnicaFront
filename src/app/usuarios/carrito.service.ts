import { Injectable } from '@angular/core';
import { Carrito } from './carrito';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Producto } from '../productos/producto';
import { DataService } from '../data/data.service';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private urlEndPoint:string='/api/carrito';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient, private dataService:DataService) { }

  create(dni,url:String) : Observable<Carrito> {
    return this.http.post<Carrito>(`${this.urlEndPoint}${url}/${dni}`, {headers: this.httpHeaders})
  }
  agregar(producto:Producto) : Observable<any> {
    return this.http.put<any>(`${this.urlEndPoint}${this.dataService.carrito}/producto/${this.dataService.id}`,
     producto,{headers: this.httpHeaders});
  }
  eliminar(id:Number) : Observable<any> {
    return this.http.delete<any>(`${this.urlEndPoint}${this.dataService.carrito}/producto/${id}/${this.dataService.id}`,
     {headers: this.httpHeaders});
  }
  
}

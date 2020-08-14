import { Injectable } from '@angular/core';
import { Producto } from './producto';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private urlEndPoint:string='/api/producto';
  
  constructor(private http:HttpClient) { }

  getProductos(): Observable<Producto[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response =>  response as Producto[] )
    );
  }
}

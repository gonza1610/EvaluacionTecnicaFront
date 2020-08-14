import { Component, OnInit } from '@angular/core';
import {Producto} from './producto';
import {ProductoService} from './producto.service';
import {CarritoService} from '../usuarios/carrito.service';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(private productoService:ProductoService, 
    private carritoService:CarritoService,
    private activatedRoute:ActivatedRoute,
    private dataService: DataService) { }
  
  productos: Producto[];
  productosCarrito:Producto[];
  Total: Number=0;

  ngOnInit() {
      this.productoService.getProductos().subscribe( 
        response => 
          this.productos=response as Producto[]
        );
    } 
  agregar(producto: Producto): void {
    this.carritoService.agregar(producto).subscribe(
      response =>{this.Total=response.Total;
         this.productosCarrito=response.Carrito.productos as Producto[]} );
  }
  eliminar(producto: Producto): void {
    this.carritoService.eliminar(producto.id).subscribe(
      response =>{this.Total=response.Total;
         this.productosCarrito=response.Carrito.productos as Producto[]} );
  }
}

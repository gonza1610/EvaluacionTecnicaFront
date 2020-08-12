import { Component, OnInit } from '@angular/core';
import {Producto} from './producto';
import {ProductoService} from './producto.service';
import {CarritoService} from '../usuarios/carrito.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(private productoService:ProductoService, private carritoService:CarritoService) { }
  
  productos: Producto[];

  ngOnInit() {
      this.productoService.getProductos().subscribe( 
        response => 
          this.productos=response as Producto[]
        );
    } 
  agregar(producto: Producto): void {
    this.carritoService.agregar(producto).subscribe(
      response => {
        this.productos = this.productos.filter(cli => cli !== producto)      
          }
    )
  }
}

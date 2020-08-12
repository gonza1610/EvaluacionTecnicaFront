import { Component, OnInit } from '@angular/core';
import {Carrito} from './carrito'
import {CarritoService} from './carrito.service'
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  private carrito: Carrito = new Carrito()
  private titulo:string = "Crear Carrito"
  private temporada:Boolean=true;

  constructor(private carritoService: CarritoService,
  private router: Router,
  private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }
  
  create(): void {
    if(this.temporada){
      this.carritoService.createEspecial(this.carrito.dniUsuario)
        .subscribe(cliente => 
          this.router.navigate(['/productos'])
        );
    }
    else{
      this.carritoService.create(this.carrito.dniUsuario)
      .subscribe(cliente => 
        this.router.navigate(['/productos'])
      );
    }
  }
}

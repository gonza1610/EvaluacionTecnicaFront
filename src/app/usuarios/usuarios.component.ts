import { Component, OnInit } from '@angular/core';
import {Carrito} from './carrito'
import {Usuario} from './usuario'
import {CarritoService} from './carrito.service'
import { UsuarioService } from './usuario.service';
import {Router, ActivatedRoute} from '@angular/router'
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  private carrito: Carrito = new Carrito()
  private usuario: Usuario = new Usuario()
  private titulo:string = "Crear Carrito"
  private temporada:Boolean=true;

  constructor(private carritoService: CarritoService,
    private usuarioService: UsuarioService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService) { }

  ngOnInit() {
  }
  cargarUsuario(): void{
    this.usuarioService.getUsuario(this.usuario.dni).subscribe(
      (usuario) => {this.usuario = usuario,this.create()});
  }

  create(): void {
    if(this.usuario.tipoUsuario){
      let carritoTipo="Vip";
      this.carritoService.create(this.usuario.dni,carritoTipo)
        .subscribe(carrito => {
          this.router.navigate(['/productos']);
          this.enviar(carritoTipo,carrito.id);
          alert("Se creo un carrito Vip")}
        );
    }
    else if(this.temporada){
      let carritoTipo="Especial";
      this.carritoService.create(this.usuario.dni,carritoTipo)
        .subscribe(carrito => {
          this.router.navigate(['/productos']);
          this.enviar(carritoTipo,carrito.id);
          alert("Se creo un carrito Especial")}
        );
    }
    else{
      let carritoTipo="";
      this.carritoService.create(this.usuario.dni,carritoTipo)
      .subscribe(carrito => {
        this.router.navigate(['/productos']);
        this.enviar(carritoTipo,carrito.id);
        alert("Se creo un carrito")}
      );
    }
  }
  enviar(carrito:String, id:Number){
    this.dataService.carrito=carrito;
    this.dataService.id=id;
  }
}

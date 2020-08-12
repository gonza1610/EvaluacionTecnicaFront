import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductoService } from './productos/producto.service';
import { CarritoService } from './usuarios/carrito.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UsuariosComponent } from './usuarios/usuarios.component';
const routes: Routes=[
  {path: '', redirectTo: '/usuario', pathMatch: 'full'},
  {path: 'productos', component: ProductosComponent},
  {path: 'usuario', component: UsuariosComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProductoService,CarritoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

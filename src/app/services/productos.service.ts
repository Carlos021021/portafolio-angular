import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';
import { ProductoDescripcion } from '../interfaces/producto-descripcion.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];
  productosFiltrado: Producto[] = [];

  constructor( private http: HttpClient ) {

    this.cargarProductos();

   }

   private cargarProductos(){

    return new Promise<void>( (resolve, reject) => {
    this.http.get('https://angular-1-7f526-default-rtdb.firebaseio.com/productos_idx.json').subscribe((resp: any)=>{
    this.productos = resp;
      setTimeout(() =>{
      this.cargando = false;
      },2500)
      resolve();
    });
    } );

    


   }

   getProducto(id: string) {
      return this.http.get(`https://angular-1-7f526-default-rtdb.firebaseio.com/productos/${ id }.json`);

   }

   buscarProducto(termino:string){


    if(this.productos.length ===0) {
      // cargar productos
      this.cargarProductos().then( ()=> {
      // ejecutar despues de tener los productos
      // aplicar filtro
      this.filtrarProductos( termino );
      } );
    } else{
      // aplicar el filtro
      this.filtrarProductos( termino );
    }

    this.productosFiltrado =this.productos.filter(producto => {
      return true;
    });

    console.log(this.productosFiltrado);
   }

   private filtrarProductos( termino:string ){

    console.log(this.productos);

    this.productos.forEach(prod => {

       if (prod.categoria.indexOf(termino)>=0){
        this.productosFiltrado.push(prod);
       }

    });

   }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  producto: ProductoDescripcion | undefined;
  id: string  | undefined; 

  constructor(private route:ActivatedRoute,
              public productosService: ProductosService){}


  ngOnInit() {

    this.route.params.subscribe
    ( parametros => {
      this.productosService.getProducto(parametros['id']).subscribe((producto: any=[]) => {
      this.producto = producto;
      this.id = parametros['id'];


      });
    });   
  }
}

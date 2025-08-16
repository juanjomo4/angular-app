import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  constructor(private service: ProductService) {}
  /*
   * Método ngOnInit() que se ejecuta al inicializar el componente.
   * Obtiene todos los productos a través del servicio y los asigna a la variable products.
   */
  ngOnInit() {
    this.service.findAll().subscribe((products) => (this.products = products));
  }
}

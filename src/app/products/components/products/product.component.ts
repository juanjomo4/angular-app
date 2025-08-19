import { Component, OnInit, Inject } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductService } from '../../services/product.service';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-product',
  imports: [FormComponent],
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
    this.service
      .findAll()
      .subscribe((products: Product[]) => (this.products = products));
  }

  addProduct(product: Product) {
    product.id = new Date().getTime(); // Asignar un ID único basado en la fecha actual
    this.products.push(product); // Forma mutable
    // Forma inmutable que se debe de usar en React,
    // se esparcen los elementos del arreglo y creamos un nuevo arreglo para agregar el nuevo elemento.
    // this.products = [...this.products, { ...product, id: new Date().getTime() }];
  }
}

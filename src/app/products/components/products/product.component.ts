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

  productSelected: Product = new Product();

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
    // Verifica si el producto ya tiene un ID asignado
    // Si el ID es mayor a 0, significa que es un producto existente y se actualiza
    // Si el ID es 0 o negativo, significa que es un nuevo producto
    if (product.id > 0) {
      this.service.update(product).subscribe((updatedProduct) => {
        this.products = this.products.map((prod) => {
          if (prod.id == product.id) {
            return { ...updatedProduct }; // Actualiza el producto existente
          }
          return prod; // Retorna el producto sin cambios
        });
      });
    } else {
      // Forma mutable
      //product.id = new Date().getTime();
      // this.products.push(product);

      // Llamada al servicio para crear el producto en el backend
      // se esparcen los elementos del arreglo y creamos un nuevo arreglo para agregar el nuevo elemento
      this.service.create(product).subscribe((newProduct) => {
        this.products = [...this.products, { ...newProduct }];
      });
    }
    this.productSelected = new Product(); // Resetea el formulario para un nuevo producto
  }

  onUpdateProduct(product: Product) {
    this.productSelected = { ...product };
  }

  onDeleteProduct(id: number) {
    // Filtra los productos para eliminar el producto con el ID especificado
    this.service.delete(id).subscribe(() => {
      this.products = this.products.filter((product) => product.id !== id);
    });
  }
}

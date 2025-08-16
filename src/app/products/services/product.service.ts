import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Sample Product',
      description: 'This is a sample product description.',
      price: 99.99,
    },
    {
      id: 2,
      name: 'Another Product',
      description: 'This is another product description.',
      price: 49.99,
    },
  ];

  constructor() {}
  /*
   * Método para obtener todos los productos en una lista y por id.
   * Se usa Observable para simular una llamada asíncrona.
   */
  findAll(): Observable<Product[]> {
    return of(this.products);
  }

  findById(id: number): Observable<Product | undefined> {
    return of(this.products.find((product) => product.id === id));
  }
}

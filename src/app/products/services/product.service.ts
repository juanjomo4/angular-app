import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // private products: Product[] = [
  //   {
  //     id: 1,
  //     name: 'Sample Product',
  //     description: 'This is a sample product description.',
  //     price: 99.99,
  //   },
  //   {
  //     id: 2,
  //     name: 'Another Product',
  //     description: 'This is another product description.',
  //     price: 49.99,
  //   },
  // ];

  constructor(private http: HttpClient) {}
  private url = 'http://localhost:8080/products';
  /*
   * Método para obtener todos los productos en una lista y por id.
   * Se usa Observable para simular una llamada asíncrona.
   */
  findAll(): Observable<Product[]> {
    // return of(this.products);

    /*
     * Llamada al backend
     * Se usa map para transformar la respuesta del backend y extraer la lista de productos
     */
    return this.http
      .get<Product[]>(this.url)
      .pipe(map((response: any) => response._embedded.products as Product[]));
  }

  // findById(id: number): Observable<Product | undefined> {
  //   return of(this.products.find((product) => product.id === id));
  // }
}

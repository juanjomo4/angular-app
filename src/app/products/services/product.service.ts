import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  private url = 'http://localhost:8080/products';
  /*
   * Método para obtener todos los productos en una lista y por id.
   * Se usa Observable para simular una llamada asíncrona.
   */
  findAll(): Observable<Product[]> {
    /*
     * Llamada al backend
     * Se usa map para transformar la respuesta del backend y extraer la lista de productos
     */
    return this.http
      .get<Product[]>(this.url)
      .pipe(map((response: any) => response._embedded.products as Product[]));
  }

  /*
   * Método para crear un nuevo producto.
   */
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.url, product);
  }

  /*
   * Método para actualizar un producto existente.
   */
  update(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.url}/${product.id}`, product);
  }

  /*
   * Método para eliminar un producto existente.
   */
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}

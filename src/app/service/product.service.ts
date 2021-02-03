import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product.class';

const URL = 'http://localhost:8080/products';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  // service functions
  // getAll products
  getAll(): Observable<Product[]> {
    return this.http.get(URL + '/') as Observable<Product[]>;
  }

  // getByID
  getById(id): Observable<Product> {
    return this.http.get(URL + '/' + id) as Observable<Product>;
  }

  //create product
  create(product: Product): Observable<Product> {
    console.log("Product create", product);
    return this.http.post(URL + '/', product) as Observable<Product>;
  }
  //update product
  update(product: Product): Observable<Product> {
    return this.http.put(URL + '/', product) as Observable<Product>;
  }
  //delete a product
  delete(id): Observable<Product> {
    return this.http.delete(URL + '/'+id) as Observable<Product>;
  }
  // login
  login(u: Product): Observable<Product>{
    return this.http.post(URL +'/login', u ) as Observable<Product>;
  }

}
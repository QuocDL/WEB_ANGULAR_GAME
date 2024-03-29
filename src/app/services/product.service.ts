import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private URI = 'http://localhost:3000/products'
  constructor(
    private http: HttpClient 
  ) { }


  getProduct(): Observable<Product[]>{
   return this.http.get<Product[]>(this.URI)
  }
   getDetailProduct(id: any): Observable<Product>{
   return this.http.get<Product>(`${this.URI}/${id}`)
  }
  deleteProduct(id:any): Observable<Product>{
    return this.http.delete<Product>(`${this.URI}/${id}`)
  }


}

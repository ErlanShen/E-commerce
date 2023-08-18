import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private allProducts = 'https://fakestoreapi.com/products';
  private randomProduct = 'https://fakestoreapi.com/products?sort=desc';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.allProducts);
  }

  randomProducts(): Observable<any[]>{
    return this.http.get<any[]>(this.randomProduct)
  }

  showFiller = false; 

}
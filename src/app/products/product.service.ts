import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl = 'api/products/product.json';

  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(this.productUrl);
  }
}

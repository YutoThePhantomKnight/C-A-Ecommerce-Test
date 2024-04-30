import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl : string;
  private myApiUrl: string;

  constructor(private http: HttpClient){
    this.baseUrl = environment.endpoint;
    this.myApiUrl = 'products';
  }

getListProducts():Observable<Product[]>{
return this.http.get<Product[]>(this.baseUrl+ this.myApiUrl)
}
  
  
}

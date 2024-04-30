import { Component, Injectable, NgModule } from '@angular/core';
import { Product } from '../../interfaces/product';
import { NgFor } from '@angular/common';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [NgFor],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})

export class ListProductsComponent {
  listProducts: Product[] = [];

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.getListProducts();
  }

  getListProducts(){
this._productService.getListProducts().subscribe((data)=>{
  this.listProducts=data;
})
  }
}


import { Component, OnInit } from '@angular/core';
import {from, map, Observable, of} from "rxjs";
import {Product, products} from "./mock";
import {basket} from "../panier/mock";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})


export class ProductComponent implements OnInit {
  public productsBrut = products
  public product$: Observable<Product[]> | undefined
  constructor() {}

  ngOnInit(): void {
     this.filterProduct("all")
  }

   filterProduct(category:string){
    this.product$ = category === "all" ? of(this.productsBrut)  : of(this.productsBrut.filter((products)  => products.category === category))
  }
  addBasket(product : Product){
      // @ts-ignore
    basket.push(product)
      console.log(basket)
  }
}



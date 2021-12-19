import { Component, OnInit } from '@angular/core';
import {getProduct} from "./mock";
import {filter, map, switchMap} from "rxjs";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})


export class ProductComponent implements OnInit {
  public products$ = getProduct()
  constructor() {}

  ngOnInit(): void {
    this.filterProduct()
  }

   filterProduct(){

    this.products$.pipe(
      map((products)  => products.category),

    )

  }

}



import { Component, OnInit } from '@angular/core';
import {Observable, of} from "rxjs";
import {Product, products} from "./mock";
import {CacheServieService} from "../service/cache-servie.service";
import {providerDef} from "@angular/compiler/src/view_compiler/provider_compiler";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})


export class ProductComponent implements OnInit {
  public productsBrut = products
  public product$: Observable<Product[]> | undefined
  constructor(private cacheService: CacheServieService) {}

  ngOnInit(): void {
     this.filterProduct("all")
  }

   filterProduct(category:string){
    this.product$ = category === "all" ? of(this.productsBrut)  : of(this.productsBrut.filter((products)  => products.category === category))
  }
  addBasket(product : Product){
    let tmpBasquet = this.cacheService.get()
    console.log(tmpBasquet)
    if(tmpBasquet == null){
      this.cacheService.post(product)
    }else{
      if(tmpBasquet.findIndex((p:Product) => p.id == product.id) == -1){
        this.cacheService.post(product)
      }else{
        console.log('oui')
      }

    }
  }
}



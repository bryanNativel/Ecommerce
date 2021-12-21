import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../product/mock";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  public basket$ = of(asket
  constructor() {}

  ngOnInit(): void {
    this.getBasketValue()
  }

  getBasketValue(){
     // @ts-ignore
    this.basket$ = of(JSON.parse(localStorage.getItem('productsLocalStorage')))
  }
}

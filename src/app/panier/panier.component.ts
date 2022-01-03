import { Component, OnInit } from '@angular/core';
import {Observable, of} from "rxjs";
import {basket} from "./mock";
import {CacheServieService} from "../service/cache-servie.service";



@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  public baskets = of(this.cacheService.get())
  constructor(private cacheService : CacheServieService) {}

  ngOnInit(): void {

  }

  getBasketValue(){

  }
  totalLigne(price :number,qte:number){
    return price * qte
  }
}

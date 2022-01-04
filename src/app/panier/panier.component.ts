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
  public commande = false
  public alertCommande = false
  public checkBasketBool : boolean | undefined
  constructor(private cacheService : CacheServieService) {}

  ngOnInit(): void {
    this.checkBasket()
  }

  getTotal (){

    let sum = 0;

    for (let i = 0; i < this.cacheService.get().length; i++) {
      sum += parseInt(this.cacheService.get()[i].price);
    }
    return sum
  }
  buy(){
    this.commande = true
    // @ts-ignore
    setTimeout(this.alerte(),1000)
  }
  alerte(){
    this.alertCommande = true
    localStorage.clear()
  }
  checkBasket(){


  }

  totalLigne(qte: any, price: any){
  return parseInt(qte) * parseInt(price)
  }
}

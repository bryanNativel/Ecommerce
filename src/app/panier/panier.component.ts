import { Component, OnInit } from '@angular/core';
import { of, timer} from "rxjs";
import {CacheServieService} from "../service/cache-servie.service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  public baskets = of(this.cacheService.get())
  public commande = of(false)
  public alerte  = false
  public checkBasketBool : boolean | undefined = false
  constructor(private cacheService : CacheServieService,private route:Router) {}

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
    this.commande = of(true)
    setTimeout(()=>{ this.alert(); },2000);
  }

  alert(){
    this.commande = of(false)
    this.alerte = true
    setTimeout(()=>{ this.redirect(); },(1000));
  }

  redirect(){
    localStorage.clear()
    this.route.navigate(['product'])
  }

  totalLigne(qte: any, price: any){
  return parseInt(qte) * parseInt(price)
  }

  checkBasket(){
    this.checkBasketBool = this.cacheService.get() != null;

  }
}

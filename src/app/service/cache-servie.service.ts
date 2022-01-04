import { Injectable } from '@angular/core';
import {Product} from "../product/mock";

@Injectable({
  providedIn: 'root'
})

export class CacheServieService {
  constructor() {}

  public get(){
    // @ts-ignore
    return JSON.parse(localStorage.getItem('basket'))
  }

  public post(product : Product){

    // @ts-ignore
    let tmp = JSON.parse(localStorage.getItem('basket'))
    if(tmp === null){
      let arrayTmp = []
      arrayTmp.push(product)
      localStorage.setItem('basket',JSON.stringify(arrayTmp))
    }else{
      tmp.push(product)
      localStorage.setItem('basket',JSON.stringify(tmp))
      // @ts-ignore
    }
  }

  public removeAll(){
    localStorage.clear()
  }

}

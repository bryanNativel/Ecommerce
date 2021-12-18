import { Component, OnInit } from '@angular/core';
import {getProduct} from "./mock";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})


export class ProductComponent implements OnInit {
  public products$ = getProduct()
  constructor() {}

  ngOnInit(): void {}

}



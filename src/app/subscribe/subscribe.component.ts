import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
public connexion = false
  constructor(public route : Router) { }

  ngOnInit(): void {
  }
  go(){
    this.connexion = true
    setTimeout(()=>{ this.redirect(); },(3000));
  }
  redirect(){
    this.route.navigate(['login'])
  }
}

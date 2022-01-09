import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public connexion = false
  constructor(public route:Router) { }

  ngOnInit(): void {
  }
  go(){
    this.connexion = true
    setTimeout(()=>{ this.redirect(); },(4000));
  }
  redirect(){
    this.route.navigate(['home'])
  }
}

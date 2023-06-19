import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  userLoginOn:boolean=false; //Primera vez no autenticado 
  constructor(){}
    ngOnInit():void{}

}
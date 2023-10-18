 import { Component, OnInit } from '@angular/core';
 import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class homeComponent implements OnInit{

  drinks : any = [] // sara un Array con un interfaccia di tipo fattura fatture: fattura = []
 
       //constructor() {}
 
       constructor(private http : HttpClient) {}
     
       ngOnInit(): void { // non tutte le chiamate vanno fatte qui solo quelle che voglio mostrare all'inizion--> ON INIT
 
         this.http.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a').subscribe( ( response: any) => {
 
           // this.drinks = response
           console.log(response);
           this.drinks = response.drinks;
 
         })
        
       }
 }
   
  
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
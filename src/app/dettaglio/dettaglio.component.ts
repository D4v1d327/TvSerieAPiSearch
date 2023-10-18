 import { Component, OnInit } from '@angular/core';
 import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.css']
})

export class dettaglioComponent {
drinks: any = [];
  constructor(private http : HttpClient) {}
     
       ngOnInit(): void {
 
         this.http.get('http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=15200').subscribe( ( res: any) => {
 
           // this.drinks = response
           console.log(res);
           this.drinks = res.drinks;
 
         })
}
}
   
  
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
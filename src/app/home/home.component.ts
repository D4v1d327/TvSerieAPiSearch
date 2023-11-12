import { Component } from '@angular/core';
import { serieService } from '../services/serieService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class homeComponent {
  series: any = [];
  serieTitle: string = "";
  searchSerie: boolean = false;

  constructor(private serieService: serieService) {}

  effettuaRicerca() {
    this.serieService.getElencoSeries(this.serieTitle).subscribe((response: any) => {
      this.series = response;
      this.searchSerie = true;
      console.log(response);
    });
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
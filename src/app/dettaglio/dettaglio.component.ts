import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { serieService  } from '../services/serieService'; // ha già anche l'import di httpClient

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.css']
})

export class dettaglioComponent {
  serie: any = {};
  id: number; // variabile id
  constructor( private serieService:serieService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id']; // Prendo l'ID dalla URL con snapshot.params e lo assegno alla variabile
  }

  ngOnInit(): void {
      this.serieService.getIdSerie(this.id).subscribe((res: any) => {
        console.log(res); // debug
        this.serie = res;
      });
    } 
}

  
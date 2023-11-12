import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { serieService  } from '../services/serieService'; // ha già anche l'import di httpClient

@Component({
  selector: 'app-episodi',
  templateUrl: './episodi.component.html',
  styleUrls: ['./episodi.component.css']
})

export class episodiComponent {

  episodes: any = [];
  id:number;
  
    constructor( private serieService:serieService, private route: ActivatedRoute) {
      this.id = this.route.snapshot.params['id']; // Prendo l'ID dalla URL con snapshot.params e lo assegno alla variabile
  }

  ngOnInit(): void {

    this.serieService.getElencoEpisodes(this.id).subscribe((res: any) => {
      console.log(res); // debug
      this.episodes = res;
    });
      
    
    } 
}

  
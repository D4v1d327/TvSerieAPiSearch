import { Injectable } from '@angular/core';
import { ApiService } from './ApiService';

    @Injectable({

     providedIn: 'root', 

    })

    export class serieService{

        constructor(private apiService:ApiService) {}
        getElencoSeries(title: string){
              return this.apiService.searchByTitle(title)
        }
        
        getIdSerie (id: number){
              return this.apiService.searchById(id) // invoco la funzione scritta in ApiService passando l'id come parametro
        }


        getElencoEpisodes(id:number){
            return this.apiService.GetEpisodes(id)

        }
    

      }
    


    
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // importo qui quindi in serieService non serve perchè importo questo file

    @Injectable({

     providedIn: 'root', // può essere passato in giro

    })

    export class ApiService {

        constructor(private http: HttpClient) {}

        searchByTitle(query: string) {
            return this.http.get('https://api.tvmaze.com/search/shows?q=' + query)} // base URL + parametro string

        searchById(idSerie: number) {
            return this.http.get('https://api.tvmaze.com/shows/' + idSerie)} // concateno l'URL con l'ID

        GetEpisodes( idSerie: number){
            return this.http.get('https://api.tvmaze.com/shows/'+idSerie+'/episodes')} // concateno l'URL con l'ID
        }
    
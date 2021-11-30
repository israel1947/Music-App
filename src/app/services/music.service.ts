
import { Injectable } from '@angular/core';
import   dataArtista  from "./artista.json";


@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor() { }

  getArtistas(){
    return dataArtista.items;
  }

  getNewReleases() {
    return fetch('https://platzi-music-api.herokuapp.com/browse/new-releases').then(
        response => response.json()
    );
  }
  
  getArtistPorCancion(artistId){
    return fetch(`https://platzi-music-api.herokuapp.com/artists/${artistId}/top-tracks?country=CO`).then(
        response => response.json()
    );
  }
}

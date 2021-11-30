import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private http:HttpClient) { }

  getNewReleases() {
    return fetch('https://platzi-music-api.herokuapp.com/browse/new-releases').then(
        response => response.json()
    );
     }
}

import { Component, OnInit } from '@angular/core';
import { MusicService } from '../services/music.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  slideOps={
    loop: false,
    slidesPerView: 4,
    slidesPerGroup: 4,
    grabCursor: true,
    spaceBetween: 30,
    speed: 400,
  };
  
  artistas=[];
  songs:any=[];
  albums:any=[]

  constructor(private musicService:MusicService) {}

  ngOnInit():void {
  }

  ionViewDidEnter(){
    this.musicService.getNewReleases().then(newRelease=>{
      this.artistas=newRelease.albums.items;
      this.songs=newRelease.albums.items.filter(e=>e.album_type=="single");
      this.albums=newRelease.albums.items.filter(e=>e.album_type=="album");
      console.log(this.artistas);
    })
  }
}


import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MusicService } from '../services/music.service';
import { SongsModalPage } from '../songs-modal/songs-modal.page';

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

  constructor(private musicService:MusicService,
              private modalController:ModalController) {}

  ngOnInit():void {
  }

  ionViewDidEnter(){
    this.musicService.getNewReleases().then(newRelease=>{
      this.artistas=this.musicService.getArtistas();
      console.log(this.artistas);
      this.songs=newRelease.albums.items.filter(e=>e.album_type=="single");
      this.albums=newRelease.albums.items.filter(e=>e.album_type=="album");
      console.log(this.artistas);
    })
  }

  //cargar a apartir de el servicio de musicService las canciones top del artista, esta las carga en formato json y las envia al modal y este luego se encarga de renderizarlas y cargarlas en el HTML
  async showSongs(artista){

    //esperar a la respuesta del MusicService
    const songs = await this.musicService.getArtistPorCancion(artista.id);
    const modal =await this.modalController.create({
      component: SongsModalPage,
      componentProps:{
        songs:songs.tracks,
        artista:artista.name,
      }
    });
    await modal.present();//permite hacer la redireccion al hacer click en cualquier artista
  }
}


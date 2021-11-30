import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MusicService } from '../services/music.service';
import { SongsModalPage } from '../songs-modal/songs-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slideOps={
    loop: false,
    slidesPerView: 4,
    slidesPerGroup: 4,
    grabCursor: true,
    spaceBetween: 30,
    speed: 400,
  };
  
  artistas:any=[];
  songs:any=[];
  albums:any=[];
  song = {
    playing:true,
    name:[],
    preview_url:'',
    
 };
 currentSong:any=[];
 newTime;

  constructor(private musicService:MusicService,
              private modalController:ModalController,) {}

  

  ionViewDidEnter(){
    this.musicService.getNewReleases().then(newRelease=>{
      this.artistas=this.musicService.getArtistas();
      console.log(this.artistas);
      this.songs=newRelease.albums.items.filter(e=>e.album_type=="single");
      this.albums=newRelease.albums.items.filter(e=>e.album_type=="album");
    })
  }

  //cargar a apartir de el servicio de musicService las canciones top del artista, esta las carga en formato json y las envia al modal y este luego se encarga de renderizarlas y cargarlas en el HTML
  async showSongs(artista){

    //esperar a la respuesta del MusicService
    const songs = await this.musicService.getArtistPorCancion(artista.id);
    const modal =await this.modalController.create({
      component: SongsModalPage,
      componentProps:{
        songs:songs.tracks,//mostrara las canciones del artista en cuestion es decir al que de click
        artista:artista.name,//mostrara el nombre del artista seleccionado para asi mostrar sus respectivas canciones
       
      }
    });
    modal.onDidDismiss().then(dataReturned=>{//onDidDismiss optiene los datos exactos que retorna el modal
      this.song=dataReturned.data;
    });
    return await modal.present();//permite hacer la redireccion al hacer click en cualquier artista
   }

   play(){//evento para hacer play a la cancion seleccionada
     this.currentSong = new Audio(this.song.preview_url);
     this.currentSong.play();
     //escuchar cuado cambia la propiedad currentSong (barra de progreso de la cancion seleccionada)
     this.currentSong.addEventListener('timeupdate',()=>{
       //hacer que la barra de progreso corresponda con el tiempo de la cacion que esta sonando
       this.newTime = ( 1 / this.currentSong.duration ) * this.currentSong.currentTime;
     })
     this.song.playing=true;
    }
    
    pause(){//evento para hacer pausa a la cancion seleccionada
    this.currentSong.pause()
    this.song.playing=false;
   }
}



import { Component } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-songs-modal', 
  templateUrl: './songs-modal.page.html',
  styleUrls: ['./songs-modal.page.scss'],
})
export class SongsModalPage  {

  constructor( private navParams:NavParams,
               private modalController:ModalController) { }
 
  songs:any[];
  artista:string;
 
  ionViewDidEnter(){
    this.songs=this.navParams.data.songs;//songs hace referencia al envio que se da por parte del home.page.ts
    this.artista=this.navParams.data.artista;
    console.log(this.songs);
  }

  //cerrar el modal y devolver al componente principal home la cancion que ha sido seleccionada
  async selectSong(song){
    await this.modalController.dismiss(song);//dismiss recibe lo que yo le quiero devolver al componente que lo invoco es decir: la cancion seleccionada
  }

}

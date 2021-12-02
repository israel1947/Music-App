import { Component } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-album-modal',
  templateUrl: './album-modal.page.html',
  styleUrls: ['./album-modal.page.scss'],
})
export class AlbumModalPage {

  constructor(private navParams:NavParams,
              private modalController:ModalController) { }

  songs:any[];
  artist_or_album:string;

  ionViewDidEnter(){
    this.songs=this.navParams.data.songs;//songs hace referencia al envio que se da por parte del home.page.ts
    this.artist_or_album=this.navParams.data.artist_or_album;
    console.log(this.songs);
  }

  //cerrar el modal y devolver al componente principal home la cancion que ha sido seleccionada
  async selectAlbum(songs){
    await this.modalController.dismiss(songs);//dismiss recibe lo que yo le quiero devolver al componente que lo invoco es decir: la cancion seleccionada
  }
 
}

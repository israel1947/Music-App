import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor( public loadingController: LoadingController ) { }


    // Auto hide show loader
    async autoLoader() {
      const loading= await this.loadingController.create({
        //message: 'Iniciano sesión, por favor espere!',
        duration: 4000,
        //translucent: true,
        //spinner:null,
        //animated:true,
        cssClass:'loader-css-class ',
        //backdropDismiss: true,
        //keyboardClose:true,
      })
      await loading.present();
    }
}

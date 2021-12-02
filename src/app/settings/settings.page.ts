import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource, ImageOptions } from '@capacitor/camera';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  //foto por defaul de usuarios
  userImage='assets/img/no-user-image.jpg'

  //alamacenar la foto tomada
  foto:SafeResourceUrl;

  constructor(private router:Router,
              private sanitezer:DomSanitizer) { }

  ngOnInit() {
  }
  GoToBack(){
    this.router.navigate(['./menu/home'], { skipLocationChange: true });
  }

 async tomarFoto(){
   try {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
      source:CameraSource.Camera
    });
    
    //recibir la foto y cargargarla a la funcion de foto que luego se vera reflejada en el html
    this.foto = this.sanitezer.bypassSecurityTrustResourceUrl(
      image && image.dataUrl
    )
    console.log(image);

   } catch (error) {
     console.log('error al tomar o sleccionar foto');
   }
  }

}

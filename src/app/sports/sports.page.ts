import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation } from '@capacitor/geolocation';

const getCurrentPosition = async()=>{
  const coordinates  = await Geolocation.getCurrentPosition()
  console.log('Current position:', coordinates);
}

@Component({
  selector: 'app-sports',
  templateUrl: './sports.page.html',
  styleUrls: ['./sports.page.scss'],
})
export class SportsPage  {

  marker="/assets/img/bicycle.png"

  currentCenter:any;
  coordinates:any[]=[];
  zoomByDefault:number=14;


  constructor( private router:Router) {
    this.optenerPosicion(); 
    this.watchPosition();
  }

  GoToBack(){
    this.router.navigate(['./menu/home'], { skipLocationChange: true });
  }

  //optener coordenadas del mapa(latitud y longitud)
  async optenerPosicion(){
    const coordinates = await Geolocation.getCurrentPosition();
    this.currentCenter = {
      lat:coordinates.coords.latitude,
      long:coordinates.coords.longitude,
    };
  }

  

  //crear flujos constantes de cambios es decir: que se pueda cambiar la ubuicacion en el mapa
  watchPosition(){
    Geolocation.watchPosition({}, position=>{
      this.currentCenter = {
        lat:position.coords.latitude,
        long:position.coords.longitude
      }
      //mostrar recorido que esta teniendo el usuario en el mapa(lineas en el mapa)
      this.coordinates.push({
        lat:position.coords.latitude,
        long:position.coords.longitude
      });

    });

  }

}

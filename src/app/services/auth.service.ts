import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storage:Storage) { }

  loginUser(credenciales){
    return new Promise((accept, reject)=>{
      if(credenciales.email=="correo@correo.com" && credenciales.password=="123456"){
        accept("login correcto");
      }else{
        reject("inicio de sesión fallido");//en caso de que el usuario o passwor sean erroneas, arrojara el error en pantalla
      }
    });
  }

  registrarUser(userData:any){//almacenar el usuario en el Storage
    userData.password = btoa(userData.password);
    this.storage.create();
    return this.storage.set("user",userData);
  }
}

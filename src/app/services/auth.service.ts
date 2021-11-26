import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loginUser(credenciales){
    return new Promise((accept, reject)=>{
      if(credenciales.email=="correo@correo.com" && credenciales.password=="123456"){
        accept("login correcto");
      }else{
        reject("inicio de sesión fallido");//en caso de que el usuario o passwor sean erroneas, arrojara el error en pantalla
      }
    });
  }
}

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

/*const user = await this.storage.get("user");//recibe las credenciales registradas desde registerform 
return new Promise((accept, reject)=>{
  if(user.email == credenciales.email && user.password == btoa(credenciales.password) ){
    accept("login correcto");
  }else{
    reject("inicio de sesión fallido");//en caso de que el usuario o password sean erroneas, arrojara el error en pantalla
  }
});*/
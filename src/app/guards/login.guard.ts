import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  
   constructor (  private storage:Storage,
                  private router:Router){}




 async canActivate(){
    try{
      const isUserLogged = await this.storage.get('isUserLogged');//guarda la info del usuario en el storage

      if(isUserLogged){//si es correcto, entonces sera verdadero por ende dejara ingresar hasta home
        return true;
      }else{//caso contrario, dira que es falso y sera redirigido nuevamente hasta el login hasta que las credenciales sean correctas
        this.router.navigate(['/login']);
        return false;
      }
    }catch(error){
      this.router.navigate(['/login']);
    }
  }
  
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  constructor() { }


  //modo oscuro segun las preferencias del usuario(si usa su dispositivo en modo oscuro, asi se mostrara la App)
  checkDarkMode(){
    // Use matchMedia to check the user preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    if(prefersDark.matches){
      document.body.classList.toggle('dark');
    }
  }

  darkModeTogglr(){
    document.body.classList.toggle('dark');
  }
}

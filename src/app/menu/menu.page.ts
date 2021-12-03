import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  
  constructor( private menuControler:MenuController,
               private navControler:NavController,
               private storage:Storage) { }

  ngOnInit() {
  }

  //funcion encargada de cerrar el menú
  closeMenu(){
    this.menuControler.close();
  }

  //funcion para poder cerrar sesión y ser redirigido a login
  logout(){
    this.storage.remove('isUserLogged');//elimina las credenciales del usuario del storage
    this.navControler.navigateRoot('/login');
  }

  goToSettings(){
    this.navControler.navigateRoot('/menu/settings');
    this.menuControler.close();
  }

  goToSport(){
    this.navControler.navigateRoot('/menu/sports');
    this.menuControler.close();
  }

  goToHome(){
    this.navControler.navigateRoot('/menu/home');
    this.menuControler.close();
  }
}

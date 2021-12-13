import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { DarkModeService } from './services/dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor( private platform: Platform,
               private darkMode:DarkModeService ) {


   this.initializeApp();
}

  initializeApp() {
    this.platform.ready().then(()=>{
    //this.statusBar.styleDefault();
    //this.splashScreen.hide();
    this.darkMode.checkDarkMode();
     });
    }
    
   
}

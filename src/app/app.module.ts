import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';

import { NgxLoadingModule } from 'ngx-loading';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SongsModalPageModule } from './songs-modal/songs-modal.module';
import { AlbumModalPageModule } from './album-modal/album-modal.module';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],

  entryComponents: [],

  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
    SongsModalPageModule,
    AlbumModalPageModule,
    AgmCoreModule.forRoot({apiKey:environment.MapKeyApi}),
    NgxLoadingModule.forRoot({}),
  ],

  providers: [
    { provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy
     }
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}

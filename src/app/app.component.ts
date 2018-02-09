import { TabsPage } from '../pages/tabs/tabs';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';




import {AuthProvider} from '../providers/auth/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'InicioPage';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private auth: AuthProvider) {
    platform.ready().then(() => {
      
      this.auth.Session.subscribe(session=>{
        if(session){
            this.rootPage = TabsPage;
        }
          else{
            this.rootPage = 'InicioPage';
          }
      });

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

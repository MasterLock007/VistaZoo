import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
 
 
//************paginas agregadas************+ */
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { RelojFactory } from '../pages/clases/relojFactory';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
 
//*************+aoutenticacion**********************
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { AuthProvider } from '../providers/auth/auth';




import { FileService } from '../services/file.service';
import {HttpModule} from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

//*****************************************************
 
 

export const firebaseConfig = {
  apiKey: "AIzaSyCSFpmGhwElujuvxiBMcXTxYvP2NLLyptU",
  authDomain: "vistazoo-56272.firebaseapp.com",
  databaseURL: "https://vistazoo-56272.firebaseio.com",
  projectId: "vistazoo-56272",
  storageBucket: "vistazoo-56272.appspot.com",
  messagingSenderId: "1059365383895"

}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage
     
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicStorageModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FileService,
    AuthProvider,
    RelojFactory,
    IonicErrorHandler,
    
  ]
})
export class AppModule {}

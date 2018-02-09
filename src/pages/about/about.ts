import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public auth: AuthProvider) {

  }
  cerrarSesion(){
    this.auth.logout();
}
//Este codigo es de daniel aguilar
}

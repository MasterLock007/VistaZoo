import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController } from 'ionic-angular';
import {AuthProvider} from '../../providers/auth/auth';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {email : '',password:''};

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public auth : AuthProvider,
     public alertCtrl : AlertController
    ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  //Registro de usuario
  signin(){
    this.auth.registerUser(this.user.email,this.user.password)
    .then((user) => {
      let alert = this.alertCtrl.create({
        title: 'Enjoy it!',
        subTitle: 'Successful',
        buttons: ['Ok']
      });
      alert.present();
    })
    .catch(err=>{
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: err.message,
        buttons: ['Ok']
        
      });
      alert.present();
    })

  }

  //Login 

  login() 
  {
      this.auth.loginUser(this.user.email,this.user.password )
      .then((user) => {
        let alert = this.alertCtrl.create({
          title: 'Welcome',
          subTitle: 'you sign in                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      ',
          buttons: ['Ok']
        });
        alert.present();

        }
      )
       .catch(err=>{
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: err.message,
          buttons: ['Ok']
        });
        alert.present();
      })
    }

}

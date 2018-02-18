import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';//se agrega AlertController
import {PushOpButton} from '../clases/PushOpButton';//se importa la nueva clase


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, 
              public alertCtrl: AlertController//se agrega variable de alerta en el constructor
            ){

  }

  public objArrayPushOpButton: PushOpButton[] = [];
  public contador:number;
  public titulo:string;
   


/******************Area de Funciones***********************/

//metodo para contar
cuenta(nombre:string,id:number,veces:number)
{
  this.titulo = nombre;
  this.objArrayPushOpButton[id].setNumVeces(1);
  this.contador = veces;
  console.log(this.objArrayPushOpButton[id].getTituloPush()+" :"+"veces "+this.objArrayPushOpButton[id].getNumVeces());
}




  //metodo para agregar una alerta y un nuevo boton
  agregaPush() {
    let prompt = this.alertCtrl.create({
      title: 'New Button',
      message: "Add new button of frecuency",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',
          handler: data => {
            console.log(data["title"],'Saved clicked');
            ///condicion para crear el boton 
            
            
            const idTemp = (this.objArrayPushOpButton.length) + 1;
            this.objArrayPushOpButton.push(new PushOpButton(idTemp-1, data["title"]));
            
            for (let entry of this.objArrayPushOpButton) {
                console.log(entry);
            }
          }
        }
      ]
    });
    prompt.present();
}

 
//Este codigo es de daniel aguilar
}

import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';//se agrega AlertController
import {PushOpButton} from '../clases/PushOpButton';//se importa la nueva clase
import { ToastController } from 'ionic-angular'; 

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, 
              public toastCtrl: ToastController,
              public alertCtrl: AlertController,//se agrega variable de alerta en el constructor
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
             
            if(data["title"].length==0){

              this.toastTittle('top');
                
              }else{
            
            const idTemp = (this.objArrayPushOpButton.length) + 1;
            this.objArrayPushOpButton.push(new PushOpButton(idTemp-1, data["title"]));
            
            } 
          }
        }
      ]
    });
    prompt.present();
}

reset(){
  this.objArrayPushOpButton= [];
  this.contador = undefined;
  this.titulo="";
}
toastTittle(position: string) {
  let toast = this.toastCtrl.create({
    message: 'Mmmm... invalid title',
    duration: 1000,
    position: position
  });

toast.present(toast);
}
 
//Este codigo es de daniel aguilar
}

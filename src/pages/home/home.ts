import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Reloj } from '../clases/reloj';
import { RelojFactory } from '../clases/relojFactory';
import { isString } from 'ionic-angular/util/util';
import { _document } from '@angular/platform-browser/src/browser';

 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})
export class HomePage {

  constructor(public navCtrl: NavController,
            relojFactory:RelojFactory,
            public alertCtrl: AlertController
            
            
  
  ) {
     
    this.relojFactory = relojFactory;

  }

  public hora:number = 0;
  public minutos:number = 0;
  public segundos:number = 0;

  public segundos2:number = 0;
  public minutos2:number = 0;
  public hora2:number = 0;

  public coleccion:Array<Reloj> = [];
  public contador:any;

  private relojFactory:RelojFactory;

  public tap: number = 1;

  public cont: number =0;

  

  tapEvent(e) 
  {
    this.tap++
    if(this.tap > 2)
    {
      this.tap = 1;
    }
  }


  start ()
  {
  if (this.contador == undefined)
    {
      this.contador = setInterval(()=>{
        if (this.hora2 == 2 && this.hora == 3 && this.minutos2 == 5 && this.minutos == 9 && this.segundos2 == 5 && this.segundos == 9)
        {
          this.hora = 0;
          this.minutos = 0;
          this.segundos = 0;
          this.segundos2 = 0;
          this.minutos2 = 0;
          this.hora2 = 0;
        } else
        {
          this.segundos += 1;
    
          if(this.segundos == 10)
          {
            this.segundos = 0;
            this.segundos2 +=1;

            if(this.segundos2 == 6)
            {
              this.segundos2 = 0;
              this.minutos += 1;
      
              if(this.minutos == 10)
              {
                this.minutos = 0;
                this.minutos2 += 1;

                if (this.minutos2 == 6) 
                {
                  this.minutos2 = 0;
                  this.hora += 1;

                  if (this.hora == 10) 
                  {
                    this.hora = 0;
                    this.hora2 += 1;
                  }
                }
              }
            }
          }
        } }, 1000);
    }
  }

  lapso (hora, minutos, segundos)
  {
    let obj = this.relojFactory.nuevoReloj(
      this.hora, this.minutos, this.segundos,
      this.segundos2, this.minutos2, this.hora2);
    this.coleccion.push(obj);
  }

  pause (hora,hora2,minutos,minutos2,segundos2,segundos)
  {
    var h1 = this.hora;
    var h2 = this.hora2;
    var m1 = this.minutos;
    var m2 = this.minutos2;
    var s1 = this.segundos;
    var s2 = this.segundos2;

    stop();

      this.relojFactory.nuevoReloj(this.hora = h1, this.minutos = m1, this.segundos = s1,
      this.segundos2 = s2, this.minutos2 = m2, this.hora2 = h2
   )
   stop()
  }    

  stop ()
  {
    clearInterval(this.contador);
    this.hora = 0;
    this.minutos = 0;
    this.segundos = 0;
    this.segundos2 = 0;
    this.minutos2 = 0;
    this.hora2 = 0;

    this.contador = null;

  }
  
  //momentos de la alerta que guarda botones
  doPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'New switch',
      message: "Agrega el nombre al switch",
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
            this.cont += 1;
           
            //const botones =[
              // {id:this.cont,name: data.title}
             //] 
              
            
            
          }
        }
      ]
    });
    prompt.present();
}
    

  
agrega(){
  var t_re = document.getElementById("botones");
  t_re.innerHTML="holamundo"; 
}  
  

}

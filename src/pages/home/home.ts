import { Component } from '@angular/core';
import { NavController, AlertController, NavParams, Platform } from 'ionic-angular';
import { Reloj } from '../clases/reloj';
import { RelojFactory } from '../clases/relojFactory';
import { ToggleButton } from '../clases/ToggleButton';
import { ToastController } from 'ionic-angular'; 
import { LoadingController } from 'ionic-angular';
//import { FileService } from '../../services/file.service';



 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})
export class HomePage {
  storageDirectory: string= 'file:///';
 

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
            relojFactory:RelojFactory,
            public platform: Platform,
            public toastCtrl: ToastController,
            public loadingCtrl: LoadingController,
            public alertCtrl: AlertController,/*private fileService: FileService*/ )
   {
    this.relojFactory = relojFactory;
    //this.storageDirectory = fileService.getStorageDirectory();
  }
  
  /*
  saveFile() {
   

    var nombre:string="";
   
    for (let index = 0; index <this.objArrayToggleButtons.length; index++) {                 
    nombre+="<tr><td>"+    this.objArrayToggleButtons[index].getTituloToggle()      +"</td><td>"+    this.coleccion[index].getHora2()+this.coleccion[index].getHora()+":"+this.coleccion[index].getMinuto2()+this.coleccion[index].getMinuto()+":"+this.coleccion[index].getSegundo2()+this.coleccion[index].getSegundo()   +"</td></tr>"
    console.log(this.coleccion[index].getHora2()+this.coleccion[index].getHora()+":"+this.coleccion[index].getMinuto2()+this.coleccion[index].getMinuto()+":"+this.coleccion[index].getSegundo2()+this.coleccion[index].getSegundo());
    
    }
    let table = "<table>"+
                   "<thead>"+
                      "<tr>"+
                         "<th>"+
                                "Action"+
                        " </th>"+
                         "<th>"+
                                 " Time"+
                      "  </th>"+
                          "<th>"+
                                  "End Time"+
                        "</th>"+
                      "</tr>"+
                  "</thead>"+
                  "<tbody> "+
                            nombre+
                         //   +tiempo+
                //  "<tr>"+veces+"</tr>"+
                  "</tbody>"+
                 "</table>";
      this.fileService.save(this.storageDirectory, "export.xls", "application/vnd.ms-excel", table);
  
    }
    */

  public hora:number = 0;
  public minutos:number = 0;
  public segundos:number = 0;

  public segundos2:number = 0;
  public minutos2:number = 0;
  public hora2:number = 0;


  public coleccion:Array<Reloj> = [];
  public contador:any;

 // public toogleButtons: any = [];

  public objArrayToggleButtons: ToggleButton[] = [];

  private relojFactory:RelojFactory;

  public tap: number = 1;

 public nombre:string;
  

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
        if (this.hora2 == 5 && this.hora == 9 && this.minutos2 == 5 && this.minutos == 9 && this.segundos2 == 9 && this.segundos == 9)
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

            if(this.segundos2 == 10)
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

                    if (this.hora2 == 6) 
                  {
                    this.hora2 = 0;
                  }
                  }
                }
              }
            }
          }
        } }, 9.5);
    }
  }

  lapso(hora, minutos, segundos,titulo:string)
  {
    let obj = this.relojFactory.nuevoReloj(
      this.hora, this.minutos, this.segundos,
      this.segundos2, this.minutos2, this.hora2,this.nombre=titulo);
      this.coleccion.push(obj);
      console.log(titulo+"="+this.hora2+":"+this.hora+":"+this.minutos2+this.minutos+":"+this.segundos2+this.segundos);

      
  }

  pause (hora,hora2,minutos,minutos2,segundos2,segundos)
  {
    var h1 = this.hora;
    var h2 = this.hora2;
    var m1 = this.minutos;
    var m2 = this.minutos2;
    var s1 = this.segundos;
    var s2 = this.segundos2;
    var tit = this.nombre;

    stop();

      this.relojFactory.nuevoReloj(this.hora = h1, this.minutos = m1, this.segundos = s1,
      this.segundos2 = s2, this.minutos2 = m2, this.hora2 = h2, this.nombre=tit
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
  reset ()
  {
    clearInterval(this.contador);
    this.hora = 0;
    this.minutos = 0;
    this.segundos = 0;
    this.segundos2 = 0;
    this.minutos2 = 0;
    this.hora2 = 0;
       
    this.contador = null;
    this.objArrayToggleButtons = [];
    this.nombre="";
    this.coleccion = [];
    this.toastTittle('top',1);
    this.newVistazooLoad();
  }

 
  
  //momentos de la alerta que guarda botones
  doPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'New switch',
      message: "name to switch",
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

            this.toastTittle('top',0);
              
            }else{
              const idTemp = (this.objArrayToggleButtons.length) + 1;
              this.objArrayToggleButtons.push(new ToggleButton(idTemp, data["title"]));
            }     
          }
        }
      ]
    });
    prompt.present();
}

toastTittle(position: string,flag: number) {
  let message='';
  if(flag==1){
   message='New VistaZoo!!' ;
  }else{
    message='Mmmm... invalid title';
  }
  let toast = this.toastCtrl.create({
    message,
    duration: 1000,
    position: position
  });

toast.present(toast);
}

newVistazooLoad() {
  const loader = this.loadingCtrl.create({
    content: "Please wait...",
    duration: 1000
  });
  loader.present();
}

    
}

// sonido en botones
//agregar botones redondos para frecuencias sin tiempo y debajo los labesl con el nombre del boton apretado
//sonido programable para intervalos de tiempo, cad minuto quiero que suenes
//centesimas de segundos, en el cronometro,
//minutos segundos, centesima

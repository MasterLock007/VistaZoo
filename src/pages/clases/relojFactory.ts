import { Reloj } from "./reloj";
 

export class RelojFactory
{

    constructor()
    {

    }

    nuevoReloj (hora:number, minutos:number, segundos:number,
         segundos2:number, minutos2:number, hora2:number):Reloj
    {
        return new Reloj (hora, minutos, segundos, segundos2, minutos2, hora2);
    }
}
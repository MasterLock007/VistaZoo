export class PushOpButton {

    public idPush:number ;
    public tituloPush: string;
    public numVeces:number = 0;//propiedad para contar cuantas veces fue presionado

    constructor(idPush: number, tituloPush: string) {
        this.idPush = idPush;
        this.tituloPush = tituloPush;
        this.numVeces = this.numVeces;

    }

    getIdPush():number 
    {
        return this.idPush;
    }

    getTituloPush():string
    {
        return this.tituloPush;

    }

    getNumVeces():number
    {
        return this.numVeces ;
    }

    setIdPush(idPush:number)
    {
        this.idPush = idPush;
    }

    setTituloPush(tituloPush:string)
    {
        this.tituloPush = tituloPush;
    }

    setNumVeces(numVeces:number)
    {
        this.numVeces += numVeces;
        
    }

}
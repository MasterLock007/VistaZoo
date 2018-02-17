export class PushOpButton {

    public idPush: number;
    public tituloPush: string;

    constructor(idPush: number, tituloPush: string) {
        this.idPush = idPush;
        this.tituloPush = tituloPush;

    }

    getIdPush():number 
    {
        return this.idPush;
    }

    getTituloPush():string
    {
        return this.tituloPush;

    }

    setIdPush(idPush:number)
    {
        this.idPush = idPush;
    }

    setTituloPush(tituloPush:string)
    {
        this.tituloPush = tituloPush;
    }

}
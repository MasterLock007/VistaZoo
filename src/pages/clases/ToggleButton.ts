export class ToggleButton {

    public idToogle: number;
    public tituloToogle: string;
    

    constructor(idToogle:number, tituloToogle:string)
    {
        this.idToogle = idToogle;
        this.tituloToogle = tituloToogle;
         
    }

    getIdToggle():number
    {
        return this.idToogle;
    }
    setIdToggle(idToogle:number)
    {
        this.idToogle = idToogle;
    }
   
    getTituloToggle():string
    {
        return this.tituloToogle;
    }
    setTituloToggle(tituloToogle:string)
    {
        this.tituloToogle = tituloToogle;
    }


}
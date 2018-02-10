export class Reloj
{
    private hora:number;
    private minuto:number;
    private segundo:number;

    private segundo2:number;
    private minuto2:number;
    private hora2:number;

    constructor(hora:number, minuto:number, segundo:number,
         segundo2:number,minuto2:number, hora2:number)
    {
        this.hora = hora;
        this.minuto = minuto;
        this.segundo = segundo;

        this.segundo2 = segundo2;
        this.minuto2 = minuto2;
        this.hora2 = hora2;
    }

    getHora():number
    {
        return this.hora;
    }
    setHora(hora:number)
    {
        this.hora = hora;
    }

    getMinuto():number
    {
        return this.minuto;
    }
    setMinuto(minuto:number)
    {
        this.minuto = minuto;
    }

    getSegundo():number
    {
        return this.segundo;
    }
    setSegundo(segundo:number)
    {
        this.segundo = segundo;
    }

    getSegundo2():number
    {
        return this.segundo2;
    }
    setSegundo2(segundo2:number)
    {
        this.segundo2 = segundo2;
    }

    getMinuto2():number
    {
        return this.minuto2;
    }
    setMinuto2(minuto2:number)
    {
        this.minuto2 = minuto2;
    }

    getHora2():number
    {
        return this.hora2;
    }
    setHora2(hora2:number)
    {
        this.hora2 = hora2;
    }
}
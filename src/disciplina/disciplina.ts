import { Nota } from "../nota/nota";

class Disciplina {
    
    ////////////////////
	//// Atributos ////
	//////////////////

    private _nomeDisciplina: string = "";
    private _cargaHoraria: number = 0;
    private _notas: Nota[] = [];


    ////////////////////
	//// Get e Set ////
	//////////////////

    public get nomeDisciplina(): string {
        return this._nomeDisciplina;
    }
    public set nomeDisciplina(value: string) {
        this._nomeDisciplina = value;
    }

    public get cargaHoraria(): number {
        return this._cargaHoraria;
    }
    public set cargaHoraria(value: number) {
        this._cargaHoraria = value;
    }

    public get notas(): Nota[] {
        return this._notas;
    }
    public set notas(value: Nota[]) {
        if (value.length < 1 || value.length > 5) {
            throw new Error (`A disciplina deve conter entre 1 e 5 notas!`)
        }
        this._notas = value;
    }


    /////////////////////
	//// Construtor ////
	///////////////////

    constructor (
        nomeDisciplina: string,
        cargaHoraria: number,
        notas: Nota[]

    )
    {
        this.nomeDisciplina = nomeDisciplina;
        this.cargaHoraria = cargaHoraria;
        this.notas = notas;
    }


    //////////////////
	//// Metodos ////
	////////////////

    public calcularMediaAritmetica(): number {
        let media: number = 0;
        let somaNotas: number = 0;
        this.notas.forEach(nota => {
            somaNotas += nota.valor;
        });
        media = somaNotas / this.notas.length;
        return media;
    }

    public calcularMediaPonderada(): number {
        let mediaP: number = 0;
        let somaNotas: number = 0;
        let somaPesos: number = 0;
        this.notas.forEach(nota => {
            somaNotas += nota.valor * nota.peso;
            somaPesos += nota.peso;
        });
        mediaP = somaNotas / somaPesos
        return mediaP;
    }


}
export {Disciplina}
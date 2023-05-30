class Filme {

    ////////////////////
	//// Atributos ////
	//////////////////
    
    private _nome: string = "";
    private _lancamento: number = 0;
    private _faixaEtaria: number = 0;


    ////////////////////
	//// Get e Set ////
	//////////////////

    public get nome(): string {
        return this._nome;
    }
    public set nome(value: string) {
        this._nome = value;
    }

    public get lancamento(): number {
        return this._lancamento;
    }
    public set lancamento(value: number) {
        this._lancamento = value;
    }

    public get faixaEtaria(): number {
        return this._faixaEtaria;
    }
    public set faixaEtaria(value: number) {
        this._faixaEtaria = value;
    }


    /////////////////////
	//// Construtor ////
	///////////////////

    constructor(
        nome: string,
        lancamento: number,
        faixaEtaria: number)
    {
        this.nome = nome;
        this.lancamento = lancamento;
        this.faixaEtaria = faixaEtaria;
    }


    //////////////////
	//// Metodos ////
	////////////////

    verificarAnoLancamento(ano: number): string {
        if(this.lancamento <= ano) {
            return(`O filme ${this.nome} foi lançado em ${this.lancamento}`);
        } else{
            return(`O filme ${this.nome} será lançado em ${this.lancamento}`);
        }
    }

    verificarFaixaEtaria(idade: number): string {
        if(idade <= this.faixaEtaria){
            return(`O filme é proibido para está pessoa`);
        } else{
            return(`O filme é permitido para está pessoa`);
        }
    }
}
export{ Filme }
import { Endereco } from "../enderecos/enderecos";

abstract class Pessoa {

	////////////////////
	//// Atributos ////
	//////////////////
	
	protected _matricula: number = 0;
	private _sexo: string = "";
	private _CPF: string = "";
	private _nome: string = "";
	private _sobrenome: string = "";
	private _idade: number = 0;
	private _brasileiro: boolean = true;
	private _enderecos: Endereco[] = [];
	private _telefone: string[] = [];
	private static _quantidadePessoa: number = 0;  //Atributo Estático


	////////////////////
	//// Get e Set ////
	//////////////////

	public get matricula(): number {
		return this._matricula;
	}
	public set matricula(value: number) {
		this._matricula = value;
	}

	public get sexo(): string {
		return this._sexo;
	}
	public set sexo(value: string) {
		this._sexo = value;
	}

	public get CPF(): string {
		return this._CPF;
	}
	public set CPF(valor: string) {
		let padraoCPF: RegExp = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}/;
		if (padraoCPF.test(valor)) {
		this._CPF = valor;
		}
		else {
			throw Error("CPF inválido");
		}
	}

	public get nome(): string {
		return this._nome;
	}
	public set nome(value: string) {
		this._nome = value;
	}

	public get sobrenome(): string {
		return this._sobrenome;
	}
	public set sobrenome(value: string) {
		this._sobrenome = value;
	}

	public get idade(): number {
		return this._idade;
	}
	public set idade(value: number) {
		this._idade = value;
	}

	public get brasileiro(): boolean {
		return this._brasileiro;
	}
	public set brasileiro(value: boolean) {
		this._brasileiro = value;
	}

	public get enderecos(): Endereco[] {
		return this._enderecos;
	}
	public set enderecos(value: Endereco[]) {
		this._enderecos = value;
	}

	public get telefone(): string[] {
		return this._telefone;
	}
	public set telefone(value: string[]) {
		this._telefone = value;
	}

	public static get quantidadePessoa(): number {
		return Pessoa._quantidadePessoa;
	}
	public static set quantidadePessoa(value: number) {
		Pessoa._quantidadePessoa = value;
	}


	/////////////////////
	//// Construtor ////
	///////////////////

	constructor(
		sexo: string,
		CPF: string,
		nome: string,
		sobrenome: string,
		idade: number,
		brasileiro: boolean,
		enderecos: Endereco[],
		telefone: string[])
	{
		this.sexo = sexo;
		this.CPF = CPF;
		this.nome = nome;
		this.sobrenome = sobrenome;
		this.idade = idade;
		this.brasileiro = brasileiro;
		this.telefone = telefone;
		this.enderecos = enderecos;
		Pessoa.quantidadePessoa++;
	}


	//////////////////
	//// Metodos ////
	////////////////

	public exibirNomeCompleto(): string  {
		return (`O nome completo é: ${this.nome} ${this.sobrenome}`);
	}

	public recuperarEndereco(): Endereco [] {
		return this.enderecos;
	}

	public verificarTelefone(posicao: number): string {
        return(this.telefone[posicao]);
    }

	public static recuperarQuantidadePessoa(): number {
		return Pessoa.quantidadePessoa;
	}

	protected abstract gerarMatricula(): number;

}

export{ Pessoa }
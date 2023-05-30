import { Endereco } from "../enderecos/enderecos";
import { Pessoa } from "../pessoa/pessoa";

class Professor extends Pessoa implements Projeto {

    ////////////////////
	//// Atributos ////
	//////////////////

    private _salario: number = 0;


    ////////////////////
	//// Get e Set ////
	//////////////////
    
    public get salario(): number {
        return this._salario;
    }
    public set salario(value: number) {
        this._salario = value;
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
		telefone: string[],
        salario: number)
    {
        super(sexo, CPF, nome, sobrenome, idade, brasileiro, enderecos, telefone);
        this.salario = salario;
        this.matricula = this.gerarMatricula();
    }


    //////////////////
	//// Metodos ////
	////////////////

    public verificarProfessor(): string {
        return(`${this.nome}, ${this.idade} anos, sexo ${this.sexo}, CPF:${this.CPF}, matricula:${this.matricula}`);
    }

    protected gerarMatricula(): number {
        return Math.floor(Math.random() * (99999999 - 10000000 + 1) + 10000000);
    }

    public submeterProjetoPesquisa(): void {
        console.log(`Isso é uma submissão de projeto de pesquisa de professor`);
    }
    public submeterProjetoExtensao(): void {
        console.log(`Isso é uma submissão de projeto de extensao de professor`);
    }

}
export{ Professor }
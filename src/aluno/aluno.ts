import { Disciplina } from "../disciplina/disciplina";
import { Endereco } from "../enderecos/enderecos";
import { Pessoa } from "../pessoa/pessoa";

class Aluno extends Pessoa implements Projeto {

	////////////////////
	//// Atributos ////
	//////////////////
	
    private _curso: string = "";
    private _situacao: SituacaoAluno = SituacaoAluno.ATIVO;
    private _disciplinas: Disciplina[] = [];


	////////////////////
	//// Get e Set ////
	//////////////////

    public get curso(): string {
        return this._curso;
    }
    public set curso(value: string) {
        this._curso = value;
    }

    public get situacao(): SituacaoAluno {
        return this._situacao;
    }
    public set situacao(value: SituacaoAluno) {
        this._situacao = value;
    }

    public get disciplinas(): Disciplina[] {
        return this._disciplinas;
    }
    public set disciplinas(value: Disciplina[]) {
        this._disciplinas = value;
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
        curso: string,
        situacao: SituacaoAluno,
        disciplinas: Disciplina[])
    {
        super(sexo, CPF, nome, sobrenome, idade, brasileiro, enderecos, telefone);
        this.curso = curso;
        this.situacao = situacao;
        this.matricula = this.gerarMatricula();
        this.disciplinas = disciplinas;
    }


    //////////////////
	//// Metodos ////
	////////////////

    public verificarAluno(matricula: number): string {
        if(this.brasileiro == true) {
            return(`${this.nome}, ${this.idade}, brasileiro, está matriculado no curso ${this.curso}`);
        } else{
            return(`${this.nome}, ${this.idade}, estrangeiro, está matriculado no curso ${this.curso}`)
        }
    }

    protected gerarMatricula(): number {
        let ano: number = new Date().getFullYear();
        let numero: number = Math.floor(Math.random() * (9999 - 1000 + 1) + 100);
        return Number(`${ano}${numero}`)
    }

    public submeterProjetoPesquisa(): void {
        console.log(`Isso é uma submissão de projeto de pesquisa de aluno`);
    }
    public submeterProjetoExtensao(): void {
        console.log(`Isso é uma submissão de projeto de extensao de aluno`);
    }


    public calcularMediaAritimeticaGeral(): number {
        let mediaGeral: number = 0;
        let somaMediaDisciplinas: number = 0;
        this.disciplinas.forEach(_disciplinas => { 
            somaMediaDisciplinas += _disciplinas.calcularMediaAritmetica();
        });
        mediaGeral = somaMediaDisciplinas / this.disciplinas.length
        return mediaGeral;
    }

    public calcularMediaPonderadaGeral(): number {
        let mediaGeral: number = 0;
        let somaMediaDisciplinas: number = 0;
        this.disciplinas.forEach(_disciplinas => { 
            somaMediaDisciplinas += _disciplinas.calcularMediaPonderada();
        });
        mediaGeral = somaMediaDisciplinas / this.disciplinas.length
        return mediaGeral;
    }

}

enum SituacaoAluno {
    ATIVO = 'Ativo',
    MATRICULADO = 'Matriculado',
    TRANCADO = 'Trancado',
    CONCLUIDO = 'Concluído',
    CANCELADO = 'Cancelado',
    FORMANDO = 'Formando',
}

export{ Aluno, SituacaoAluno }
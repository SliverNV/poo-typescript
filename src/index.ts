import { Pessoa } from "./pessoa/pessoa";
import { Filme } from "./filme/filme";
import { Aluno, SituacaoAluno } from "./aluno/aluno";
import { Professor } from "./professor/professor";
import { Endereco } from "./enderecos/enderecos";
import { Nota } from "./nota/nota";
import { Disciplina } from "./disciplina/disciplina";

const end01: Endereco = new Endereco('CEP: 49.300-000', 'Rua: A', 15, 'Bairro: Centro', 'Cidade: Tobias Barreto', 'Estado: Sergipe');
const end02: Endereco = new Endereco('CEP: 49.300-000', 'Rua: B', 118, 'Bairro: Centro', 'Cidade: Tobias Barreto', 'Estado: Sergipe');

const nota01: Nota = new Nota(10, 4);
const nota02: Nota = new Nota(8, 2);

const nota03: Nota = new Nota(8, 2);
const nota04: Nota = new Nota(10, 4);

const disc01: Disciplina = new Disciplina("Programação II", 100, [nota01, nota02])
const disc02: Disciplina = new Disciplina("Banco de Dados", 80, [nota03, nota04]);

const hesnan: Aluno = new Aluno("Feminino", "059.395.487-21", "Hesnan", "Mendes", 69, true, [end01, end02] , ["79 9.9878-4521"], "Comércio", SituacaoAluno.ATIVO, [disc01]);
const jahell: Aluno = new Aluno("Masculino", "741.666.346-55", "JaHell", "Signorini Filho", 66, true, [new Endereco('CEP: 49.300-000', 'Rua: B', 11, 'Bairro: Santa Rita', 'Cidade: Tobias Barreto', 'Estado: Sergipe')], ["79 9.8671-2347"], "Informática", SituacaoAluno.ATIVO, [disc02]);
const bricio: Professor = new Professor("Masculino", "745.896.312-11", "Bricio", "Musck", 33, true,[new Endereco('CEP: 49.300-000', 'Rua: C', 7, 'Bairro: Walter Franco', 'Cidade: Tobias Barreto', 'Estado: Sergipe')], ["79 9.4571-82"], 666999);


console.log(hesnan);
console.log(jahell);
console.log(bricio);

console.log(hesnan.disciplinas[0].calcularMediaAritmetica());
console.log(hesnan.disciplinas[0].calcularMediaPonderada());

console.log(jahell.disciplinas[0].calcularMediaAritmetica());
console.log(jahell.disciplinas[0].calcularMediaPonderada());


hesnan.submeterProjetoPesquisa();
hesnan.submeterProjetoExtensao();

bricio.submeterProjetoPesquisa();
bricio.submeterProjetoExtensao();

hesnan.calcularMediaAritimeticaGeral();
hesnan.calcularMediaPonderadaGeral();
"use strict";
let nome;
let sobrenome;
let nomecompleto;
let idade;
let brasileiro;
let enderecos;
nome = 'Will';
sobrenome = 'Smith';
idade = 43;
brasileiro = false;
nomecompleto = nome + " " + sobrenome;
enderecos = ["Rua B, Aracaju", "Rua C, Tobias Barreto"];
let exibirNomeCompleto = function () {
    return (`O nome completo é: ${nomecompleto}`);
};
let recuperaEndereco = function (posicao) {
    return enderecos[posicao];
};
console.log(exibirNomeCompleto());
console.log(recuperaEndereco(1));

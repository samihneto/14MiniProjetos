/*
Criar um objeto endereço que contém:
Rua
Cidade
CEP
exibirEndereco(endereco)
*/

class Endereço {
    rua;
    cidade;
    cep;

    constructor (rua, cidade, cep) {
        this.rua = rua;
        this.cidade = cidade;
        this.cep = cep;
    }

    exibirEndereco () {
        return `Rua: ${this.rua}, Cidade: ${this.cidade}, CEP: ${this.cep}`;
    }
}

const Casa = new Endereço ('Rua Voluntários da Pátria 4170', 'São Paulo', '02402-500');
console.log (Casa.exibirEndereco());
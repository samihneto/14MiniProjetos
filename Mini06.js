/*
Criar um método para ler propriedades de um objeto e exibir somente as propriedades do tipo string que estão nesse objeto.
*/

class Filme {
    titulo;
    ano;
    diretor;
    personagem;

    constructor(titulo, ano, diretor, personagem) {
        this.titulo = titulo;
        this.ano = ano;
        this.diretor = diretor;
        this.personagem = personagem;
    }


}

const Dracula = new Filme ('Dracula', 1944, 'Franz Bougar', 'Dracula');

function exibirPropriedades(obj) {
    for (prop in obj) {
        if (typeof obj[prop] === 'string') {
            return prop, obj[prop];
        }
    }
}

console.log(Dracula.ano);
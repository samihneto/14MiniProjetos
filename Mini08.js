/*
Exercício Nota Escolar
Obter a média a partir de um Array
0-59: F
60-69: D
70-79: C
80-89: B
90-100: A
*/

const boletim = []

boletim.push(78);
boletim.push(41);
boletim.push(60);

function calcularMedia (boletim){
let soma = 0;

for (let i = 0; i < boletim.length; i++) {
    const nota = boletim[i];
    soma += nota;
}
    return Math.floor(soma / boletim.length);
}




function mediaDoAluno(notas) {
    const media = calcularMedia(notas);
if (media < 59) {
    return 'essa nota é F!';
} else if (media < 69) {
    return 'essa nota é D!';
} else if (media < 79) {
    return 'essa nota é C!';
} else if (media < 89) {
    return 'essa nota é B!';
} else {
    return 'essa nota é A!';
}
}

console.log(`A média do aluno é ${calcularMedia(boletim)} e ${mediaDoAluno(boletim)}`);
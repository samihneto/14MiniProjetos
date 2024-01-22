/*
Receber uma quantidade de valores para avaliar
Função exibe se cada valor é par ou ímpar.
*/

console.log(avaliarValor(0));

function avaliarValor (numero) {
    if (numero===0) {
        return 'Você escolheu 0!'
    } else if (numero%2===0) {
        return 'Esse número é par!'
    } else {
        return 'Esse número é ímpar!'
    }
}

exibirTipo(5);
function exibirTipo(limite) {
    for (let i = 0; i <= limite; i++) {
        if(i%2===0) {
            console.log(i, 'Par!');
        } else {
            console.log(i, 'Ímpar!')
        }
        
    }
}
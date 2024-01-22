/*
Se divisível por 3, Fizz.
Se divisível por 5, Buzz.
Se divisível por ambos, FizzBuzz.
Se não é divisível, falha.
*/

const resultado = fizzBuzz(5);
console.log(resultado);

function fizzBuzz(entrada) {
    if ( typeof entrada !== 'number' ) {
        return 'Não é um número';
    } else if (entrada%3===0 && entrada%5===0) {
        return 'FizzBuzz.';
    } else if (entrada%3===0) {
        return 'Fizz.';
    } else if (entrada%5===0) {
        return 'Buzz.';
    } else {
        return 'Falha.';
    }
}


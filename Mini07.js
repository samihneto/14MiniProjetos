/*
Criar função de somar que retorna a soma de todos os múltiplos de 3 e 5
Múltiplos de 3
3, 6, 9
Múltiplos de 5
5, 10
*/

soma (10);

function soma (limite) {
    let multiplosDe3 = 0;
    let multiplosDe5 = 0;
    for (let i = 0; i < limite; i++) {
        if (i%3===0) {
            multiplosDe3 += i;
        } else if (i%5===0) {
            multiplosDe5 += i;
        }
        
    }
    console.log(multiplosDe3 + multiplosDe5);
}

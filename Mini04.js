/*
Velocidade máxima de até 70km
a cada 5km acima do limite você ganha 1 ponto
Math.floor()
Caso pontos maior que 12 -> "Carteira Suspensa"
*/

verificarVelocidade(60);

function verificarVelocidade(velocidade) {
    if (velocidade <= 70) {
        console.log('Ok');
    } else if (velocidade ) {
        const pontos = ((velocidade - 70) / 5);
        if (pontos >= 12) {
            console.log('Carteira Suspensa');
        }
    }
}
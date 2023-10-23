const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularAreaQuadrado(lado) {
    return lado * lado;
}

rl.question('Digite o lado do quadrado: ', (lado) => {

    lado = parseFloat(lado);

    if (!isNaN(lado) && lado > 0) {
        let area = calcularAreaQuadrado(lado);
        console.log(`A área do quadrado é: ${area}`);
    } else {
        console.log(`Por favor, insira um valor válido para o lado.`);
    }

    rl.close();
});

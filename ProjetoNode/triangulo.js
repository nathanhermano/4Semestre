const { parse } = require('path');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}

rl.question('Por favor, informar a base do triângulo: ', (base) => {
    rl.question('Por favor, infome a altura do triângulo: ', (altura) => {

        base = parseFloat(base);
        altura = parseFloat(altura);

        if (!isNaN(base) && !isNaN(altura) && base > 0 && altura > 0) {
            let area = calcularAreaTriangulo(base, altura);
            console.log(`A área do triângulo é: ${area}`);
        } else {
            console.log(`Por favor, insira valores válidos para a base e a altura.`);
        }

        rl.close();

    });
});
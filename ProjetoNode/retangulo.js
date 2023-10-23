const { parse } = require('path');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: proc
    ess.stdout
});

function calcularAreaRetangulo(largura, altura) {
    return largura * altura;
}

rl.question('Informe a largura do retângulo:  ', (largura) => {
    rl.question('Por favor, insira a altura do retângulo: ', (altura) => {

        largura = parseFloat(largura);
        altura = parseFloat(altura);

        if (!isNaN(largura) && !isNaN(altura) > 0 && altura > 0) {
            let area = calcularAreaRetangulo(largura, altura);
            console.log(`A área do retângulo é: ${area}`);
        } else {
            console.log(`Por favor, insira valores válidos para largura e altura.`);

        }

        rl.close();

    });
});




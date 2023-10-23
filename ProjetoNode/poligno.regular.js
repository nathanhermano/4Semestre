const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Por favor, insira o número de lados do polígono regular: ', (numLados) => {
    rl.question('Por favor, insira o comprimento do lado: ', (comprimentoLado) => {
        const area = calcularAreaPoligonoRegular(numLados, comprimentoLado);
        console.log(`A área do polígono regular é: ${area}`);
        rl.close();
    });
});

function calcularAreaPoligonoRegular(numLados, comprimentoLado) {
    numLados = parseInt(numLados);
    comprimentoLado = parseFloat(comprimentoLado);

    if (numLados < 3) {
        throw new Error('O número de lados deve ser igual ou maior que 3.');
    }

    if (comprimentoLado <= 0) {
        throw new Error('O comprimento do lado deve ser maior que zero.');
    }

    const apotema = comprimentoLado / (2 * Math.tan(Math.PI / numLados));
    const area = (numLados * comprimentoLado * apotema) / 2;
    return area;
}


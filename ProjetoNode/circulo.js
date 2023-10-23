const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularAreaCirculo(raio) {
    const area = Math.PI * Math.pow(raio, 2);
    return area;
}

rl.question('Informe o raio do círculo: ', (raio) => {
    raio = parseFloat(raio);

    if (!isNaN(raio) && raio > 0) {
        const area = calcularAreaCirculo(raio);
        console.log(`A área do círculo com raio ${raio} é: ${area.toFixed(2)}`);
    } else {
        console.log('Por favor, insira um raio válido mais que zero.');
    }

    rl.close();
});
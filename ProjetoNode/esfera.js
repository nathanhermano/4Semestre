const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Por favor, insira o raio da esfera: ', (raio) => {
    const areaSuperficie = calcularAreaEsfera(raio);
    console.log(`A área da superfície da esfera é: ${areaSuperficie}`);
    rl.close();
});

function calcularAreaEsfera(raio) {
    raio = parseFloat(raio);

    if (raio <= 0) {
        throw new Error('O raio deve ser maior que zero.');
    }

    const area = 4 * Math.PI * Math.pow(raio, 2);

    return area;
}
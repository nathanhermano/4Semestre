const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Por favor, insira o raio da base do cilindro: ', (raio) => {
    rl.question('Por favor, insira altura do cilindro: ', (altura) => {
        const areaSuperficie = calcularAreaCilindro(raio, altura);
        console.log(`A área da superfície do cilindro é: ${areaSuperficie}`);
        rl.close();
    });
});

function calcularAreaCilindro(raio, altura) {
    raio = parseFloat(raio);
    altura = parseFloat(altura);

    if (raio <= 0 || altura <= 0) {
        throw new Error('O raio e a altura devem ser maiores que zero.');
    }

    const areaBase = Math.PI * Math.pow(raio, 2);
    const areaLateral = 2 * Math.PI * raio * altura;
    const areaTotal = 2 * areaBase + areaLateral;

    return areaTotal;
}

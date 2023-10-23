const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Por favor, insira o número de lados da base do prisma: ', (numLadosBase) => {
    rl.question('Por favor, insira o comprimento do lado da base: ', (comprimentoLado) => {
        rl.question('Por favor, insira a altura da base: ', (alturaBase) => {
            rl.question('Por favor, insiraa altura do prisma: ', (alturaPrisma) => {
                const areaTotal = calcularAreaPrisma(numLadosBase, comprimentoLado, alturaBase, alturaPrisma);
                console.log(`A área total do prisma é: ${areaTotal}`);
                rl.close();
            });
        });
    });
});

function calcularAreaPrisma(numLadosBase, comprimentoLado, alturaBase, alturaPrisma) {
    numLadosBase = parseInt(numLadosBase);
    comprimentoLado = parseFloat(comprimentoLado);
    alturaBase = parseFloat(alturaBase);
    alturaPrisma = parseFloat(alturaPrisma);

    if (numLadosBase < 3 || comprimentoLado <= 0 || alturaBase <= 0 || alturaPrisma <= 0) {
        throw new Error('Os valores inseridos não são válidos para o cálculo da área do prisma.');
    }

    const areaBase = (numLadosBase * Math.pow(comprimentoLado, 2)) / (4 * Math.tan(Math.PI / numLadosBase));
    const areaLateral = 2 * numLadosBase * comprimentoLado * alturaPrisma;
    const areaTotal = 2 * areaBase + areaLateral;

    return areaTotal;
}


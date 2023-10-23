const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularAreaTrapezio(baseMaior, baseMenor, altura) {
    return ((baseMaior + baseMenor) * altura) / 2;
}

rl.question('Por fvor, insira a base maior do trapézio: ', (baseMaior) => {
    rl.question('Por favor, insira a base menor do trapéio: ', (baseMenor) => {
        rl.question('Por favor, insira a altura do trpézio: ', (altura) => {

            baseMaior = parseFloat(baseMaior);
            baseMenor = parseFloat(baseMenor);
            altura = parseFloat(altura);

            if (!isNaN(baseMaior) && !isNaN(baseMenor) && !isNaN(altura) && baseMaior > 0 baseMenor > 0 && altura > 0) {
            let area = calcularAreaTrapezio(baseMaior, baseMenor, altura);
            console.log(`A área do trapézio é: ${area}`);
        } else {
            console.log(`Por favor, insira valores válidos para as bases e a altura.`);
        }

        rl.close();
    });
});
});




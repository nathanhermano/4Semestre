const readline = require('readline');
const turf = require('@turf/turf');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Informe as coordenadas dos vértices (formato: x1 y1, x2 y2, ... xn yn): ', (coordenadas) => {
    const pontos = coordenadas.split(',').map(coordenada => {
        const [x, y] = coordenada.trim().split(' ').map(Number);
        return [x, y];
    });

    if (pontos.length < 3) {
        console.error('É necessário fornecer pelo menos 3 pontos para calcular a área de um polígono.');
        rl.close();
        return;
    }

    pontos.push(pontos[0]); 
    
    const polygon = turf.polygon([pontos]);
    const area = turf.area(polygon);

    console.log(`A área do polígono é: ${area} metros quadrados`);
    rl.close();
});

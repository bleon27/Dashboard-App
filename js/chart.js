export function charjs(data) {
    const ctx = document.getElementById('PorcentajeRicksMortys');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Ricks', 'Mortys'],
            datasets: [{
                label: 'Procentaje',
                data: [data.rick.porcentajeRicks, data.morty.porcentajeMortys],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const ctxBarrasRick = document.getElementById('barrasRick');
    new Chart(ctxBarrasRick, {
        type: 'bar',
        data: {
            labels: ['Vivos', 'Muertos', 'Desconocido'],
            datasets: [{
                label: 'Cantidad',
                data: [data.rick.alive.info.count, data.rick.dead.info.count, data.rick.unknown.info.count],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const ctxBarrasMorty = document.getElementById('barrasMorty');
    new Chart(ctxBarrasMorty, {
        type: 'bar',
        data: {
            labels: ['Vivos', 'Muertos', 'Desconocido'],
            datasets: [{
                label: 'Morty',
                data: [data.morty.alive.info.count, data.morty.dead.info.count, data.morty.unknown.info.count],
                borderWidth: 1,
            }, {
                label: 'Rick',
                data: [data.rick.alive.info.count, data.rick.dead.info.count, data.rick.unknown.info.count],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
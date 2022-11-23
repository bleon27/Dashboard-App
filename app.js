//VARIABLES GLOBALES
const contenedorNintendo = document.querySelector('.nintendo');
let pokemonName = '';



//ESCUCHADORES DE EVENTOS
document.addEventListener('DOMContentLoaded', getRickAndMorty);


//FUNCIONES
async function getRickAndMorty() {
    const respuestaRicks = await fetch(`https://rickandmortyapi.com/api/character/?name=rick`);
    const resultadoRicks = await respuestaRicks.json();
    const respuestaMortys = await fetch(`https://rickandmortyapi.com/api/character/?name=morty`);
    const resultadoMortys = await respuestaMortys.json();

    const respuestaRicksAlive = await fetch(`https://rickandmortyapi.com/api/character/?name=rick&status=alive`);
    const resultadoRicksAlive = await respuestaRicksAlive.json();
    const respuestaRicksDead = await fetch(`https://rickandmortyapi.com/api/character/?name=rick&status=dead`);
    const resultadoRicksDead = await respuestaRicksDead.json();
    const respuestaRicksUnknown = await fetch(`https://rickandmortyapi.com/api/character/?name=rick&status=unknown`);
    const resultadoRicksUnknown = await respuestaRicksUnknown.json();

    const respuestaMortysAlive = await fetch(`https://rickandmortyapi.com/api/character/?name=morty&status=alive`);
    const resultadoMortysAlive = await respuestaMortysAlive.json();
    const respuestaMortysDead = await fetch(`https://rickandmortyapi.com/api/character/?name=morty&status=dead`);
    const resultadoMortysDead = await respuestaMortysDead.json();
    const respuestaMortysUnknown = await fetch(`https://rickandmortyapi.com/api/character/?name=morty&status=unknown`);
    const resultadoMortysUnknown = await respuestaMortysUnknown.json();

    var totalRicks = resultadoRicks.info.count;
    var totalMortys = resultadoMortys.info.count;
    var total = totalRicks + totalMortys;

    var porcentajeRicks = ((totalRicks * 100) / total).toFixed(2);
    var porcentajeMortys = (100 - porcentajeRicks).toFixed(2);

    document.getElementById("totalRycksMortys").innerHTML = total;
    document.getElementById("totalRicks").innerHTML = porcentajeRicks;
    document.getElementById("totalMortys").innerHTML = porcentajeMortys;
    /*
        contenedorNintendo.innerHTML = `
        <img width='200px' src = '${resultado.sprites.front_default}' />
        <input class='input' type='text' placeholder='¿Quien es este pokemon?' />
        <button type='button' onClick={checkPokemon()}>Probar</button>
        `
    */
    //pokemonName = resultado.name;
    const ctx = document.getElementById('PorcentajeRicksMortys');

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Ricks', 'Mortys'],
            datasets: [{
                label: 'Procentaje',
                data: [porcentajeRicks, porcentajeMortys],
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
                data: [resultadoRicksAlive.info.count, resultadoRicksDead.info.count, , resultadoRicksUnknown.info.count],
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
                data: [resultadoMortysAlive.info.count, resultadoMortysDead.info.count, , resultadoMortysUnknown.info.count],
                borderWidth: 1,
            }, {
                label: 'Rick',
                data: [resultadoRicksAlive.info.count, resultadoRicksDead.info.count, , resultadoRicksUnknown.info.count],
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

function checkPokemon() {
    let inputPokemon = document.querySelector('.input').value;
    console.log(inputPokemon, pokemonName);
    if (inputPokemon === pokemonName) {
        getRickAndMorty();
    } else {
        document.querySelector('.input').value = ''
    }
}